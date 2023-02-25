export interface Res {
    ok: number
    data: Data
}

export interface Data {
    cardlistInfo: CardlistInfo
    cards: Card[]
    scheme: string
    showAppTips: number
}

export interface CardlistInfo {
    containerid: string
    v_p: number
    show_style: number
    total: number
    autoLoadMoreIndex: number
    since_id: number
}

export interface Card {
    card_type: number
    profile_type_id: string
    itemid: string
    scheme: string
    mblog: Mblog
}

export interface Mblog {
    visible: Visible
    created_at: string
    id: string
    mid: string
    can_edit: boolean
    show_additional_indication: number
    text: string
    source: Source
    favorited: boolean
    pic_ids: any[]
    is_paid: boolean
    mblog_vip_type: number
    user: MblogUser
    pid?: number
    pidstr?: string
    retweeted_status: RetweetedStatus
    reposts_count: number
    comments_count: number
    reprint_cmt_count: number
    attitudes_count: number
    pending_approval_count: number
    isLongText: boolean
    mlevel: number
    show_mlevel: number
    darwin_tags: any[]
    hot_page: HotPage
    mblogtype: number
    rid: string
    cardid: Cardid
    extern_safe: number
    number_display_strategy: NumberDisplayStrategy
    content_auth: number
    safe_tags: number
    comment_manage_info: CommentManageInfo
    repost_type: number
    pic_num: number
    new_comment_style: number
    ab_switcher: number
    region_name: RegionName
    region_opt: number
    pic_bg: string
    pic_bg_type: number
    mblog_menu_new_style: number
    edit_config: EditConfig
    raw_text: string
    bid: string
    mark?: string
}

export enum Cardid {
    Star555 = "star_555",
}

export interface CommentManageInfo {
    comment_permission_type: number
    approval_comment_type: number
    comment_sort_type: number
    ai_play_picture_type?: number
}

export interface EditConfig {
    edited: boolean
}

export interface HotPage {
    fid: Fid
    feed_detail_type: number
}

export enum Fid {
    The232532_Mblog = "232532_mblog",
    The232532_Supergroup = "232532_supergroup",
}

export interface NumberDisplayStrategy {
    apply_scenario_flag: number
    display_text_min_number: number
    display_text: DisplayText
}

export enum DisplayText {
    The100U4E07 = "100u4e07+",
}

export enum RegionName {
    U53D1U5E03U4E8EU56Dbu5Ddd = "u53d1u5e03u4e8e u56dbu5ddd",
    U53D1U5E03U4E8EU5E7Fu4E1C = "u53d1u5e03u4e8e u5e7fu4e1c",
}

export interface RetweetedStatus {
    visible: Visible
    created_at: string
    id: string
    mid: string
    can_edit: boolean
    show_additional_indication: number
    text: string
    textLength: number
    source: string
    favorited: boolean
    pic_ids: string[]
    thumbnail_pic: string
    bmiddle_pic: string
    original_pic: string
    is_paid: boolean
    mblog_vip_type: number
    user: RetweetedStatusUser
    picStatus: PicStatus
    reposts_count: number
    comments_count: number
    reprint_cmt_count: number
    attitudes_count: number
    pending_approval_count: number
    isLongText: boolean
    mlevel: number
    show_mlevel: number
    topic_id?: string
    sync_mblog?: boolean
    is_imported_topic?: boolean
    darwin_tags: DarwinTag[]
    hot_page: HotPage
    mblogtype: number
    rid: string
    cardid?: string
    number_display_strategy: NumberDisplayStrategy
    content_auth: number
    safe_tags: number
    comment_manage_info: CommentManageInfo
    pic_num: number
    jump_type?: number
    new_comment_style: number
    region_name: RegionName
    region_opt: number
    edit_config: EditConfig
    page_info: PageInfo
    pics: Pic[]
    bid: string
    expire_time?: number
    ad_state?: number
    mark?: string
}

export interface DarwinTag {
    object_type: string
    object_id: string
    display_name: string
    enterprise_uid: null
    pc_url?: string
    mapi_url?: string
    bd_object_type: string
}

export interface PageInfo {
    type: Type
    object_type: number
    page_pic: PagePic
    page_url: string
    page_title: string
    content1: string
    content2?: string
}

export interface PagePic {
    url: string
    height?: string
    width?: string
}

export enum Type {
    SearchTopic = "search_topic",
    Topic = "topic",
}

export enum PicStatus {
    The011121314151617181 = "0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1",
}

export interface Pic {
    pid: string
    url: string
    size: PicSize
    geo: PicGeo
    large: Large
}

export interface PicGeo {
    width: number
    height: number
    croped: boolean
}

export interface Large {
    size: LargeSize
    url: string
    geo: LargeGeo
}

export interface LargeGeo {
    width: number | string
    height: number | string
    croped: boolean
}

export enum LargeSize {
    Large = "large",
}

export enum PicSize {
    Orj360 = "orj360",
}

export interface RetweetedStatusUser {
    id: number
    screen_name: string
    profile_image_url: string
    profile_url: string
    statuses_count: number
    verified: boolean
    verified_type: number
    close_blue_v: boolean
    description: string
    gender: Gender
    mbtype: number
    svip: number
    urank: number
    mbrank: number
    follow_me: boolean
    following: boolean
    follow_count: number
    followers_count: string
    followers_count_str: string
    cover_image_phone: string
    avatar_hd: string
    like: boolean
    like_me: boolean
    badge: { [key: string]: number }
    verified_type_ext?: number
    verified_reason?: string
}

export enum Gender {
    F = "f",
    M = "m",
}

export interface Visible {
    type: number
    list_id: number
}

export enum Source {
    IPhone14ProMax = "iPhone 14 Pro Max",
}

export interface MblogUser {
    id: number
    screen_name: ScreenName
    profile_image_url: string
    profile_url: string
    statuses_count: number
    verified: boolean
    verified_type: number
    verified_type_ext: number
    verified_reason: VerifiedReason
    close_blue_v: boolean
    description: string
    gender: Gender
    mbtype: number
    svip: number
    urank: number
    mbrank: number
    follow_me: boolean
    following: boolean
    follow_count: number
    followers_count: FollowersCount
    followers_count_str: FollowersCount
    cover_image_phone: string
    avatar_hd: string
    like: boolean
    like_me: boolean
    badge: { [key: string]: number }
}

export enum FollowersCount {
    The905U4E07 = "90.5u4e07",
}

export enum ScreenName {
    Wu767Eu5408U6B27U7687U5B50W = "wu767eu5408u6b27u7687u5b50w",
}

export enum VerifiedReason {
    U77E5U540Du52A8U6F2Bu535Au4E3B = "u77e5u540du52a8u6f2bu535au4e3b",
}
