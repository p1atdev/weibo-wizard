import { colors } from "./deps.ts"

export const log = {
    info: (...args: any[]) => {
        console.log(colors.blue("[INFO]"), ...args)
    },
    success: (...args: any[]) => {
        console.log(colors.green("[SUCCESS]"), ...args)
    },
    error: (...args: any[]) => {
        console.log(colors.red("[ERROR]"), ...args)
    },
    warn: (...args: any[]) => {
        console.log(colors.yellow("[WARN]"), ...args)
    },
}
