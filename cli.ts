import { SearchContainerId, UserContainerId } from "./common.ts"
import { Command, colors, tty } from "./deps.ts"
import { log } from "./log.ts"
import { getSearchCards, getUserCards } from "./main.ts"

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

                log.info("Downloading...")

                const cards = await getUserCards(userId, limit, container)

                log.info(cards.length, "cards found!")
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

                log.info("Downloading...")

                const cards = await getSearchCards(userId, limit, container)

                log.info(cards.length, "cards found!")
            })
    )
    .parse(Deno.args)
