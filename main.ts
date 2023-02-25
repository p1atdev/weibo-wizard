import { WeiboClient } from "./client.ts"
import { SearchContainerId, UserContainerId } from "./common.ts"
import * as API from "./api/mod.ts"

type Card = API.User.Res.Card | API.Search.Res.Card

export const getUserCards = async (
    userId: string,
    limit: number,
    containerId: UserContainerId = UserContainerId.weibo
) => {
    const client = new WeiboClient()
    const cards: API.User.Res.Card[] = []

    let sinceId: number | undefined

    while (cards.length < limit) {
        const res = await client.getUser({ userId, containerId, sinceId })
        sinceId = res.data.cardlistInfo.since_id

        const cardsOnPage = res.data.cards
        cards.push(...cardsOnPage)

        if (cardsOnPage.length === 0) {
            break
        }
    }

    return cards.slice(0, Math.min(cards.length, limit))
}

export const flatCards = (cards: API.Search.Res.Card[]) => {
    return cards.flatMap((card) => {
        switch (card.card_type) {
            case 11: {
                return card.card_group?.filter((card) => card.card_type === 9) ?? []
            }
            case 9: {
                return [card]
            }
            default: {
                return []
            }
        }
    })
}

export const getSearchCards = async (
    userId: string,
    limit: number,
    containerId: SearchContainerId = SearchContainerId.all
) => {
    const client = new WeiboClient()
    const cards: API.Search.Res.Type9Card[] = []

    let page = 1

    while (cards.length < limit) {
        const res = await client.search({ value: userId, containerId, page })
        page += 1

        const cardsOnPage = flatCards(res.data.cards)
        cards.push(...cardsOnPage)

        if (cardsOnPage.length === 0) {
            break
        }
    }

    return cards.slice(0, Math.min(cards.length, limit))
}

export const getPicsFromCards = (cards: Card[]) => {
    const pics: string[] = []

    for (const card of cards) {
        if (card.card_type === 9) {
            const urls = card.mblog?.pics?.map((pic) => pic.large.url) ?? []
            pics.push(...urls)
        }
    }

    return Array.from(new Set(pics))
}
