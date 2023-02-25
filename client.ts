import * as API from "./api/mod.ts"

export class WeiboClient {
    search = API.Search.Get
    getUser = API.User.Get
}
