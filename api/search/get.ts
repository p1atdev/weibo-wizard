import { APIEndpoint, HostURL, SearchContainerId } from "../../common.ts"
import { Res } from "./res.ts"

interface Props {
    /**
     * Search value
     * @example "明日方舟"
     */
    value: string

    /** Search type
     * default: SearchContainerId.All
     */
    containerId?: SearchContainerId

    /**
     * Page number
     */
    page?: number
}

const GetSearch = async ({ value, containerId = SearchContainerId.all, page }: Props): Promise<Res> => {
    const url = new URL(APIEndpoint.containerGetIndex, HostURL.api)
    url.searchParams.append("containerid", `${containerId}&q=${value}`)
    url.searchParams.append("page", page?.toString() ?? "1")

    const res = await fetch(url.toString())
    return await res.json()
}

export default GetSearch
