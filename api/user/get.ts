import { APIEndpoint, HostURL, UserContainerId } from "../../common.ts"
import { Res } from "./res.ts"

interface Props {
    /**
     * User id
     */
    userId: string

    /**
     * Container id
     * default: UserContainerId.weibo
     */
    containerId?: UserContainerId

    /**
     * Since id (optional)
     */
    sinceId?: number
}

const GetUser = async ({ userId, containerId = UserContainerId.weibo, sinceId }: Props): Promise<Res> => {
    const url = new URL(APIEndpoint.containerGetIndex, HostURL.api)
    url.searchParams.append("uid", userId)
    url.searchParams.append("containerid", containerId)
    if (sinceId) {
        url.searchParams.append("since_id", sinceId.toString())
    }
    const res = await fetch(url.toString())
    return await res.json()
}

export default GetUser
