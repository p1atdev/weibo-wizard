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
    textLength?: number
    source: string
    favorited: boolean
    pic_ids: string[]
    thumbnail_pic?: string
    bmiddle_pic?: string
    original_pic?: string
    is_paid: boolean
    mblog_vip_type: number
    user: MblogUser
    picStatus?: string
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
    expire_time?: number
    ad_state?: number
    darwin_tags: DarwinTag[]
    hot_page: HotPage
    mblogtype: number
    mark?: string
    rid: string
    attitude_dynamic_adid?: string
    cardid: string
    extern_safe: number
    number_display_strategy: NumberDisplayStrategy
    content_auth: number
    safe_tags?: number
    comment_manage_info: CommentManageInfo
    pic_num: number
    jump_type?: number
    new_comment_style: number
    ab_switcher: number
    region_name: string
    region_opt: number
    pic_bg: string
    pic_bg_type: number
    mblog_menu_new_style: number
    edit_config: MblogEditConfig
    page_info?: MblogPageInfo
    pics?: MblogPic[]
    bid: string
    retweeted_status?: RetweetedStatus
    repost_type?: number
    raw_text?: string
    pid?: number
    pidstr?: string
}

export interface CommentManageInfo {
    comment_permission_type: number
    approval_comment_type: number
    comment_sort_type: number
    ai_play_picture_type?: number
}

export interface DarwinTag {
    object_type: string
    object_id: string
    display_name: string
    enterprise_uid: null
    pc_url: string
    mapi_url: string
    bd_object_type: string
}

export interface MblogEditConfig {
    edited: boolean
}

export interface HotPage {
    fid: string
    feed_detail_type: number
}

export interface NumberDisplayStrategy {
    apply_scenario_flag: number
    display_text_min_number: number
    display_text: string
}

export interface MblogPageInfo {
    type: string
    object_type: number
    page_pic: PurplePagePic
    page_url: string
    page_title: string
    content1: string
    content2?: string
}

export interface PurplePagePic {
    url: string
}

export interface MblogPic {
    pid: string
    url: string
    size: string
    geo: PicGeo
    large: Large
}

export interface PicGeo {
    width: number
    height: number
    croped: boolean
}

export interface Large {
    size: string
    url: string
    geo: LargeGeo
}

export interface LargeGeo {
    width: number | string
    height: number | string
    croped: boolean
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
    thumbnail_pic?: string
    bmiddle_pic?: string
    original_pic?: string
    is_paid: boolean
    mblog_vip_type: number
    user: RetweetedStatusUser
    picStatus?: string
    reposts_count: number
    comments_count: number
    reprint_cmt_count: number
    attitudes_count: number
    pending_approval_count: number
    isLongText: boolean
    mlevel: number
    show_mlevel: number
    darwin_tags: DarwinTag[]
    hot_page: HotPage
    mblogtype: number
    rid: string
    cardid?: string
    number_display_strategy: NumberDisplayStrategy
    content_auth: number
    safe_tags?: number
    comment_manage_info: CommentManageInfo
    pic_num: number
    new_comment_style: number
    region_name: string
    region_opt: number
    edit_config: RetweetedStatusEditConfig
    pics?: RetweetedStatusPic[]
    bid: string
    edit_count?: number
    edit_at?: string
    topic_id?: string
    sync_mblog?: boolean
    is_imported_topic?: boolean
    jump_type?: number
    page_info?: RetweetedStatusPageInfo
    pic_video?: string
    expire_time?: number
    ad_state?: number
    mark?: string
    live_photo?: string[]
    fid?: number
}

export interface RetweetedStatusEditConfig {
    edited: boolean
    menu_edit_history?: MenuEditHistory
}

export interface MenuEditHistory {
    scheme: string
    title: string
}

export interface RetweetedStatusPageInfo {
    type: string
    object_type: number
    page_pic: FluffyPagePic
    page_url: string
    page_title: string
    content1: string
    content2?: string
    url_ori?: string
    object_id?: string
    title?: string
    video_orientation?: string
    play_count?: string
    media_info?: MediaInfo
    urls?: Urls
}

export interface MediaInfo {
    stream_url: string
    stream_url_hd: string
    duration: number
}

export interface FluffyPagePic {
    url: string
    width?: number
    pid?: string
    source?: number
    is_self_cover?: number
    type?: number
    height?: number
}

export interface Urls {
    mp4_720p_mp4: string
    mp4_hd_mp4: string
    mp4_ld_mp4: string
}

export interface RetweetedStatusPic {
    pid: string
    url: string
    size: string
    geo: PicGeo
    large: Large
    videoSrc?: string
    type?: string
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

export interface Visible {
    type: number
    list_id: number
}

export interface MblogUser {
    id: number
    screen_name: string
    profile_image_url: string
    profile_url: string
    statuses_count: number
    verified: boolean
    verified_type: number
    verified_type_ext: number
    verified_reason: string
    close_blue_v: boolean
    description: string
    gender: string
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
}

export enum Gender {
    F = "f",
    M = "m",
}
