import * as API from "./api/mod.ts"

export class WeiboClient {
    // getContainerGetIndexUser = async (
    //     value: string,
    //     containerId: ContainerId,
    //     since_id?: string
    // ): Promise<ContainerGetIndexUserRes> => {
    //     const url = new URL(APIEndpoint.containerGetIndex, HostURL.api)
    //     url.searchParams.append("type", "uid")
    //     url.searchParams.append("value", value)
    //     url.searchParams.append("containerid", containerId)
    //     if (since_id) {
    //         url.searchParams.append("since_id", since_id)
    //     }
    //     const res = await fetch(url.toString())
    //     return await res.json()
    // }

    // getContainerGetIndexSearchAll = async (value: string, containerId: ContainerId): Promise<Container> => {
    //     const url = new URL(APIEndpoint.containerGetIndex, HostURL.api)
    //     url.searchParams.append("type", "uid")
    //     url.searchParams.append("extparam", value)
    //     url.searchParams.append("containerid", `${containerId}&q=${value}`)

    //     const res = await fetch(url.toString())
    //     return await res.json()
    // }

    search = API.Search.Get
}
