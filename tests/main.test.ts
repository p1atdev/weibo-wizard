import { SearchContainerId, UserContainerId } from "../common.ts"
import { assertEquals } from "../deps.ts"
import { getSearchCards, getUserCards } from "../main.ts"

Deno.test("get 30 user cards", async () => {
    const count = 30
    const cards = await getUserCards("6441489862", count, UserContainerId.weibo)

    assertEquals(cards.length, count)
})

Deno.test("get 100 user cards", async () => {
    const count = 100
    const cards = await getUserCards("6441489862", count, UserContainerId.weibo)

    assertEquals(cards.length, count)
})

Deno.test("search 30 hash tag cards", async () => {
    const count = 30
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.all)

    assertEquals(cards.length, count)
})

Deno.test("search 100 hash tag cards", async () => {
    const count = 100
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.all)

    assertEquals(cards.length, count)
})

Deno.test("search 30 media hash tag cards", async () => {
    const count = 30
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.media)

    assertEquals(cards.length, count)
})

Deno.test("search 100 media hash tag cards", async () => {
    const count = 100
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.media)

    assertEquals(cards.length, count)
})
