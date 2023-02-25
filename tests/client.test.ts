import { WeiboClient } from "../client.ts"
import { assertExists, assertNotEquals, assertEquals } from "../deps.ts"
import * as API from "../api/mod.ts"

// Deno.test("weibo client getContainerGetIndex", async () => {
//     const client = new WeiboClient()

//     const res = await client.getContainerGetIndexUser("6441489862", ContainerId.weibo)

//     assertExists(res)
// })

// Deno.test("weibo client getContainerGetIndex towice", async () => {
//     const client = new WeiboClient()

//     const first = await client.getContainerGetIndexUser("6441489862", ContainerId.weibo)

//     assertExists(first.data.cards[0].mblog.id)

//     const since = first.data.cards[0].mblog.id

//     const second = await client.getContainerGetIndexUser("6441489862", ContainerId.weibo, since)

//     assertNotEquals(first.data.cards[0].mblog.id, second.data.cards[0].mblog.id)
// })

Deno.test("weibo client search all hash tag", async () => {
    const client = new WeiboClient()

    const first = await client.search({
        value: "#明日方舟#",
    })

    assertExists(first)
    assertEquals(first.ok, 1)
})

Deno.test("weibo client search all hash tag two pages", async () => {
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

    console.log(first.data.cards[0])
    console.log(second.data.cards[0])
})
