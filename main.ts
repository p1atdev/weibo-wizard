import { WeiboClient } from "./client.ts"
import { SearchContainerId, UserContainerId } from "./common.ts"
import * as API from "./api/mod.ts"

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

export const getSearchCards = async (
    userId: string,
    limit: number,
    containerId: SearchContainerId = SearchContainerId.all
) => {
    const client = new WeiboClient()
    const cards: API.Search.Res.Card[] = []

    let page = 1

    while (cards.length < limit) {
        const res = await client.search({ value: userId, containerId, page })
        page += 1

        const cardsOnPage = res.data.cards
        cards.push(...cardsOnPage)

        if (cardsOnPage.length === 0) {
            break
        }
    }

    return cards.slice(0, Math.min(cards.length, limit))
}
