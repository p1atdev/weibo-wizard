import { WeiboClient } from "./client.ts"
import { SearchContainerId, UserContainerId } from "./common.ts"
import { tty, colors } from "./deps.ts"
import { log } from "./log.ts"
import { Card, Type9Card } from "./types/card.ts"

export const flatCards = (cards: Card[]) => {
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

export const getUserCards = async (
    userId: string,
    limit: number,
    containerId: UserContainerId = UserContainerId.weibo
) => {
    const client = new WeiboClient()
    const cards: Card[] = []

    let sinceId: number | undefined

    tty.cursorDown.cursorSave

    while (cards.length < limit) {
        const res = await client.getUser({ userId, containerId, sinceId })
        sinceId = res.data.cardlistInfo.since_id

        const cardsOnPage = flatCards(res.data.cards)

        cards.push(...cardsOnPage)

        tty.eraseLine.cursorSave.text(`${colors.blue("[INFO]")} Downloading... ${cards.length} / ${limit}`)
            .cursorRestore

        if (cardsOnPage.length === 0) {
            break
        }
    }

    tty.cursorDown.eraseLine.text("")

    return cards.slice(0, Math.min(cards.length, limit))
}

export const getSearchCards = async (
    userId: string,
    limit: number,
    containerId: SearchContainerId = SearchContainerId.all
) => {
    const client = new WeiboClient()
    const cards: Type9Card[] = []

    let page = 1

    tty.cursorDown.cursorSave

    while (cards.length < limit) {
        const res = await client.search({ value: userId, containerId, page })
        page += 1

        const cardsOnPage = flatCards(res.data.cards)
        cards.push(...cardsOnPage)

        tty.eraseLine.cursorSave.text(`${colors.blue("[INFO]")} Downloading... ${cards.length} / ${limit}`)
            .cursorRestore

        if (cardsOnPage.length === 0) {
            break
        }
    }

    tty.cursorDown.eraseLine.text("")

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
