import { WeiboClient } from "../client.ts"
import { UserContainerId } from "../common.ts"
import { assertExists, assertNotEquals, assertEquals } from "../deps.ts"

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

    assertEquals(first.data.cards[0].itemid, second.data.cards[0].itemid)
})

Deno.test("weibo client get user towice", async () => {
    const client = new WeiboClient()

    const first = await client.getUser({
        userId: "6441489862",
        containerId: UserContainerId.weibo,
    })

    assertExists(first.data.cards[0].itemid)
    assertEquals(first.ok, 1)

    const since = first.data.cardlistInfo.since_id

    const second = await client.getUser({
        userId: "6441489862",
        containerId: UserContainerId.weibo,
        sinceId: since,
    })

    assertExists(second.data.cards[0].itemid)
    assertEquals(second.ok, 1)

    assertNotEquals(first.data.cards[0].itemid, second.data.cards[0].itemid)
})

Deno.test("weibo client search hash tag", async () => {
    const client = new WeiboClient()

    const first = await client.search({
        value: "#明日方舟#",
    })

    assertExists(first)
    assertEquals(first.ok, 1)
})

Deno.test("weibo client search hash tag same two page", async () => {
    const client = new WeiboClient()
    const page = 4

    const first = await client.search({
        value: "#明日方舟#",
        page,
    })

    assertExists(first)
    assertEquals(first.ok, 1)

    const second = await client.search({
        value: "#明日方舟#",
        page,
    })

    assertExists(second)
    assertEquals(second.ok, 1)

    assertEquals(first.data.cards[0].itemid, second.data.cards[0].itemid)
})

Deno.test("weibo client search hash tag two pages", async () => {
    const client = new WeiboClient()

    const first = await client.search({
        value: "#明日方舟#",
    })

    assertExists(first)
    assertEquals(first.ok, 1)

    const second = await client.search({
        value: "#明日方舟#",
        page: 2,
    })

    assertExists(second)
    assertEquals(second.ok, 1)

    assertNotEquals(first.data.cards[0].itemid, second.data.cards[0].itemid)
})

Deno.test("weibo client search hash tag and normal search", async () => {
    const client = new WeiboClient()

    const first = await client.search({
        value: "#明日方舟#",
    })

    assertExists(first)
    assertEquals(first.ok, 1)

    const second = await client.search({
        value: "明日方舟",
    })

    assertExists(second)
    assertEquals(second.ok, 1)

    assertNotEquals(first.data.cards[0].itemid, second.data.cards[0].itemid)
})
