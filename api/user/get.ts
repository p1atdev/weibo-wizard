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
    since_id?: string | number
}

const GetUser = async ({ userId, containerId = UserContainerId.weibo, since_id }: Props): Promise<Res> => {
    const url = new URL(APIEndpoint.containerGetIndex, HostURL.api)
    url.searchParams.append("uid", userId)
    url.searchParams.append("containerid", containerId)
    if (since_id) {
        url.searchParams.append("since_id", since_id.toString())
    }
    const res = await fetch(url.toString())
    return await res.json()
}

export default GetUser
