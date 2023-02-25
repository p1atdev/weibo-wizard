export enum UserContainerId {
    profile = "230283",
    weibo = "107603",
    video = "231567",
    album = "107803",
}

export enum SearchContainerId {
    all = "231522type=1",
    media = "231522type=63",
}

export enum HostURL {
    api = "https://m.weibo.cn",
    image = "http://wx2.sinaimg.cn",
}

export enum APIEndpoint {
    containerGetIndex = "/api/container/getIndex",
}

export enum ImageEndpoint {
    thumbnail = "/thumbnail",
    bmiddle = "/bmiddle",
    large = "/large",
}
