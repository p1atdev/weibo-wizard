import { WeiboClient } from "./client.ts"
import { SearchContainerId, UserContainerId } from "./common.ts"
import { tty, colors, join, basename, extname } from "./deps.ts"
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

export const downloadImage = async (
    url: string,
    filename: string,
    outputDir: string,
    maxRetry: number = 5,
    allowedExt: string[] = [".jpg"]
) => {
    const ext = extname(filename)
    if (!allowedExt.includes(ext)) {
        tty.eraseLine.cursorSave.text(`${colors.yellow("[WARN]")} ${filename} is not supported file type. Skipped.`)
            .cursorRestore
        return
    }

    try {
        await Deno.stat(join(outputDir, filename))

        tty.eraseLine.cursorSave.text(`${colors.yellow("[WARN]")} Image already exists: ${filename}. Skipped.`)
            .cursorRestore

        return
    } catch {
        // pass
    }

    let retry = 0

    while (true) {
        if (retry > maxRetry) {
            log.error(`Download image failed: ${url}`)
            return
        }

        try {
            const res = await fetch(url)

            if (!res.ok) {
                throw new Error(`Download image failed: ${url}`)
            }

            const buffer = await res.arrayBuffer()

            const outputFilePath = `${outputDir}/${filename}`

            await Deno.writeFile(outputFilePath, new Uint8Array(buffer))

            break
        } catch (e) {
            tty.eraseLine.cursorSave.text(`${colors.red("[ERROR]")} ${e}`).cursorRestore

            // wait 1 sec
            await new Promise((resolve) => setTimeout(resolve, 1000))
        } finally {
            retry += 1
        }
    }
}

export const downloadImages = async (pics: string[], outputDir: string, total: number, batch: number) => {
    const tasks: Promise<void>[] = []

    const count = Math.ceil(total / batch)

    tty.cursorDown.cursorSave

    for (let i = 0; i < batch; i++) {
        const start = i * count
        const end = Math.min((i + 1) * count, total)

        const task = async () => {
            for (const url of pics.slice(start, end)) {
                // get filename, without any query params
                const filename = basename(url.split("?")[0])

                tty.eraseLine.cursorSave.text(`${colors.blue("[INFO]")} Downloading ${colors.underline(filename)} ...`)
                    .cursorRestore
                await downloadImage(url, filename, outputDir)
            }
        }

        tasks.push(task())
    }

    await Promise.all(tasks)

    tty.cursorDown.eraseLine.text("")
}
