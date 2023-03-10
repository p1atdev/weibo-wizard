import { WeiboClient } from "../client.ts"
import { UserContainerId } from "../common.ts"
import { assertExists, assertNotEquals, assertEquals } from "../deps.ts"
import { flatCards } from "../main.ts"

Deno.test("weibo client get user", async () => {
    const client = new WeiboClient()

    const res = await client.getUser({
        userId: "6441489862",
        containerId: UserContainerId.weibo,
    })

    assertExists(res)
    assertEquals(res.ok, 1)
})

Deno.test("weibo client get same user", async () => {
    const client = new WeiboClient()

    const first = await client.getUser({
        userId: "6441489862",
        containerId: UserContainerId.weibo,
    })

    assertExists(first)
    assertEquals(first.ok, 1)

    const second = await client.getUser({
        userId: "6441489862",
        containerId: UserContainerId.weibo,
    })

    assertExists(second)
    assertEquals(second.ok, 1)

    assertEquals(flatCards(first.data.cards)[0].itemid, flatCards(second.data.cards)[0].itemid)
})

Deno.test("weibo client get user towice", async () => {
    const client = new WeiboClient()

    const first = await client.getUser({
        userId: "6441489862",
        containerId: UserContainerId.weibo,
    })

    assertExists(flatCards(first.data.cards)[0].itemid)
    assertEquals(first.ok, 1)

    const since = first.data.cardlistInfo.since_id

    const second = await client.getUser({
        userId: "6441489862",
        containerId: UserContainerId.weibo,
        sinceId: since,
    })

    assertExists(flatCards(second.data.cards)[0].itemid)
    assertEquals(second.ok, 1)

    assertNotEquals(flatCards(first.data.cards)[0].itemid, flatCards(second.data.cards)[0].itemid)
})

Deno.test("weibo client search hash tag", async () => {
    const client = new WeiboClient()

    const first = await client.search({
        value: "#ζζ₯ζΉθ#",
    })

    assertExists(first)
    assertEquals(first.ok, 1)
})

Deno.test("weibo client search hash tag same two page", async () => {
    const client = new WeiboClient()
    const page = 4

    const first = await client.search({
        value: "#ζζ₯ζΉθ#",
        page,
    })

    assertExists(first)
    assertEquals(first.ok, 1)

    const firstCards = flatCards(first.data.cards)

    const second = await client.search({
        value: "#ζζ₯ζΉθ#",
        page,
    })

    assertExists(second)
    assertEquals(second.ok, 1)

    const secondCards = flatCards(second.data.cards)

    firstCards.forEach((card, i) => {
        assertEquals(card.mblog.itemid, secondCards[i].mblog.itemid)
    })
})

Deno.test("weibo client search hash tag two pages", async () => {
    const client = new WeiboClient()

    const first = await client.search({
        value: "#ζζ₯ζΉθ#",
    })

    assertExists(first)
    assertEquals(first.ok, 1)

    const firstCards = flatCards(first.data.cards)

    const second = await client.search({
        value: "#ζζ₯ζΉθ#",
        page: 2,
    })

    assertExists(second)
    assertEquals(second.ok, 1)

    const secondCards = flatCards(second.data.cards)

    assertNotEquals(firstCards[0].itemid, secondCards[0].itemid)
})

Deno.test("weibo client search hash tag and normal search", async () => {
    const client = new WeiboClient()

    const first = await client.search({
        value: "#ζζ₯ζΉθ#",
    })

    assertExists(first)
    assertEquals(first.ok, 1)

    const firstCards = flatCards(first.data.cards)

    const second = await client.search({
        value: "ζζ₯ζΉθ",
    })

    assertExists(second)
    assertEquals(second.ok, 1)

    const secondCards = flatCards(second.data.cards)

    assertNotEquals(firstCards[0].itemid, secondCards[0].itemid)
})
