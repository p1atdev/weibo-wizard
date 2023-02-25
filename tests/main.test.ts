import { SearchContainerId, UserContainerId } from "../common.ts"
import { assertExists, assertEquals, assert } from "../deps.ts"
import { getPicsFromCards, getSearchCards, getUserCards } from "../main.ts"

Deno.test("get 30 user cards", async () => {
    const count = 30
    const cards = await getUserCards("6441489862", count, UserContainerId.weibo)

    assertEquals(cards.length, count)
    cards.forEach((card) => assertExists(card))
})

Deno.test("get 100 user cards", async () => {
    const count = 100
    const cards = await getUserCards("6441489862", count, UserContainerId.weibo)

    assertEquals(cards.length, count)
    cards.forEach((card) => assertExists(card))
})

Deno.test("search 30 hash tag cards", async () => {
    const count = 30
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.all)

    assertEquals(cards.length, count)
    cards.forEach((card) => assertExists(card))
})

Deno.test("search 100 hash tag cards", async () => {
    const count = 100
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.all)

    // assertEquals(cards.length, count)
    cards.forEach((card) => assertExists(card))
})

Deno.test("search 30 media hash tag cards", async () => {
    const count = 30
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.media)

    assertEquals(cards.length, count)
    cards.forEach((card) => assertExists(card))
})

Deno.test("search 100 media hash tag cards", async () => {
    const count = 100
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.media)

    assertEquals(cards.length, count)
    cards.forEach((card) => assertExists(card))
})

const allowedPicTypes = ["jpg", "gif"]

Deno.test("get 30 user cards and pics", async () => {
    const count = 30
    const cards = await getUserCards("6441489862", count, UserContainerId.weibo)
    const pics = getPicsFromCards(cards)

    pics.forEach((pic) => {
        assertExists(pic, "pic must exist")
        assert(allowedPicTypes.includes(pic.split(".").pop()!), `${pic} must be one of ${allowedPicTypes}`)
    })
})

Deno.test("get 100 user cards and pics", async () => {
    const count = 100
    const cards = await getUserCards("6441489862", count, UserContainerId.weibo)
    const pics = getPicsFromCards(cards)

    pics.forEach((pic) => {
        assertExists(pic, "pic must exist")
        assert(allowedPicTypes.includes(pic.split(".").pop()!), `${pic} must be one of ${allowedPicTypes}`)
    })
})

Deno.test("search 30 cards and pics", async () => {
    const count = 30
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.all)
    const pics = getPicsFromCards(cards)

    pics.forEach((pic) => {
        assertExists(pic, "pic must exist")
        assert(allowedPicTypes.includes(pic.split(".").pop()!), `${pic} must be one of ${allowedPicTypes}`)
    })
})

Deno.test("search 100 cards and pics", async () => {
    const count = 100
    const cards = await getSearchCards("#明日方舟#", count, SearchContainerId.all)
    const pics = getPicsFromCards(cards)

    pics.forEach((pic) => {
        assertExists(pic, "pic must exist")
        assert(allowedPicTypes.includes(pic.split(".").pop()!), `${pic} must be one of ${allowedPicTypes}`)
    })
})
