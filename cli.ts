import { SearchContainerId, UserContainerId } from "./common.ts"
import { Command, dirname } from "./deps.ts"
import { log } from "./log.ts"
import { getSearchCards, getUserCards, getPicsFromCards, downloadImages } from "./main.ts"

await new Command()
    .name("weibo-wizard")
    .version("0.1.0")
    .description("Scraping tool for Weibo")
    .command(
        "dump",
        new Command()
            .description("Dump posts data")
            .command("user <userId:string>", "Dump user posts data")
            .option("-o, --output <file:string>", "Output file path", { default: "./output.json" })
            .option("-l, --limit <limit:number>", "Limit of posts", { default: 30 })
            .action(async ({ output, limit }, userId) => {
                log.info("Dumping user posts data")
                log.info("User ID:", userId)
                log.info("Output file:", output)
                log.info("Limit:", limit)

                const container = UserContainerId.weibo

                log.info("Download started")

                const cards = await getUserCards(userId, limit, container)

                log.success(cards.length, "cards found!")

                log.info("Writing to file...")

                const parentDir = dirname(output)
                await Deno.mkdir(parentDir, { recursive: true })

                await Deno.writeTextFile(output, JSON.stringify(cards, null, ""))

                log.success("Done! Saved to", output)
            })
            .command("search <query:string>", "Dump searched posts data")
            .option("-o, --output <file:string>", "Output file path", { default: "./output.json" })
            .option("-t, --type <type:string>", "Container type", { default: "all" })
            .option("-l, --limit <limit:number>", "Limit of posts", { default: 30 })
            .action(async ({ output, type, limit }, userId) => {
                log.info("Dumping user posts data")
                log.info("User ID:", userId)
                log.info("Output file:", output)
                log.info("Container type:", type)
                log.info("Limit:", limit)

                const container = (() => {
                    switch (type) {
                        case "all":
                            return SearchContainerId.all
                        case "hot":
                            return SearchContainerId.hot
                        case "media":
                            return SearchContainerId.media
                        default: {
                            log.error("Invalid container type")
                        }
                    }
                })()

                log.info("Downloading started")

                const cards = await getSearchCards(userId, limit, container)

                log.success(cards.length, "cards found!")

                log.info("Writing to file...")

                const parentDir = dirname(output)
                await Deno.mkdir(parentDir, { recursive: true })

                await Deno.writeTextFile(output, JSON.stringify(cards, null, ""))

                log.success("Done! Saved to", output)
            })
    )
    .command("download", "Download posts")
    .arguments("<file:string>")
    .option("-o, --output <dir:string>", "Output directory", { required: false })
    .option("-b, --batch <batch:number>", "Batch size", { default: 10 })
    .option("-l, --limit <limit:number>", "Limit of posts", { required: false })
    .action(async ({ output, batch, limit }, file) => {
        log.info("Dumping user posts data")
        log.info("Input json:", file)
        log.info("Output file:", output)
        log.info("Limit:", limit)

        const outputPath = output || file.replace(/\.json$/, "")

        await Deno.mkdir(outputPath, {
            recursive: true,
        })

        try {
            await Deno.stat(file)
        } catch {
            log.error("Input file not found")
            Deno.exit(1)
        }

        const json = JSON.parse(await Deno.readTextFile(file))

        log.success(json.length, "cards found!")

        const pics = getPicsFromCards(json)

        log.success(pics.length, "images found!")

        const total = limit ? Math.min(limit, pics.length) : pics.length

        log.info("Downloading images...")

        await downloadImages(pics, outputPath, total, batch)

        log.success("Done! Saved to", outputPath)
    })

    .parse(Deno.args)
