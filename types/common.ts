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
    darwin_tags: any[]
    hot_page: HotPage
    mblogtype: number
    rid: string
    cardid: string
    extern_safe: number
    number_display_strategy: NumberDisplayStrategy
    content_auth: number
    safe_tags?: number
    comment_manage_info: CommentManageInfo
    pic_num: number
    new_comment_style: number
    ab_switcher: number
    region_name?: string
    region_opt?: number
    mblog_menu_new_style: number
    edit_config: MblogEditConfig
    page_info?: MblogPageInfo
    pics?: Pic[]
    bid: string
    pid?: number
    pidstr?: string
    retweeted_status?: RetweetedStatus
    mark?: string
    bus_flag?: number
    repost_type?: number
    raw_text?: string
}

export interface CommentManageInfo {
    comment_permission_type: number
    approval_comment_type: number
    comment_sort_type: number
    ai_play_picture_type?: number
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
}

export interface PurplePagePic {
    url: string
}

export interface Pic {
    pid: string
    url: string
    size: string
    geo: PicGeo
    large: Large
}

export interface PicGeo {
    width: number | string
    height: number | string
    croped: boolean
}

export interface Large {
    size: LargeSize
    url: string
    geo: LargeGeo
}

export interface LargeGeo {
    width: string
    height: string
    croped: boolean
}

export enum LargeSize {
    Large = "large",
}

export interface RetweetedStatus {
    visible: Visible
    created_at: string
    id: string
    mid: string
    edit_count?: number
    can_edit: boolean
    edit_at?: string
    show_additional_indication: number
    text: string
    textLength: number
    source: string
    favorited: boolean
    pic_ids: string[]
    is_paid: boolean
    mblog_vip_type: number
    user: RetweetedStatusUser
    reposts_count: number
    comments_count: number
    reprint_cmt_count: number
    attitudes_count: number
    pending_approval_count: number
    isLongText: boolean
    mlevel: number
    show_mlevel: number
    expire_time?: number
    ad_state?: number
    darwin_tags: any[]
    hot_page: HotPage
    mblogtype: number
    mark?: string
    rid: string
    mlevelSource?: string
    content_auth: number
    bus_flag?: number
    safe_tags: number
    comment_manage_info: CommentManageInfo
    pic_num: number
    new_comment_style: number
    region_name: string
    region_opt: number
    edit_config: RetweetedStatusEditConfig
    page_info: RetweetedStatusPageInfo
    bid: string
    thumbnail_pic?: string
    bmiddle_pic?: string
    original_pic?: string
    picStatus?: string
    cardid?: string
    number_display_strategy?: NumberDisplayStrategy
    pics?: Pic[]
    topic_id?: string
    sync_mblog?: boolean
    is_imported_topic?: boolean
    jump_type?: number
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
    icon?: string
    page_pic: FluffyPagePic
    page_url: string
    page_title: string
    url_ori?: string
    content1: string
    content2?: string
    author?: Author
}

export interface Author {
    profile_image_url: string
    screen_name: string
}

export interface FluffyPagePic {
    url: string
    height?: number | string
    width?: number | string
}

export interface RetweetedStatusUser {
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
    badge: Badge
}

export interface Badge {
    bind_taobao: number
    user_name_certificate: number
    china_2019: number
    pc_new: number
    hongbaofeijika_2021: number
    brand_account_2021: number
}

export interface ToolbarMenu {
    skip_format: number
    show_loading?: number
    can_unfollow?: number
    is_follow?: number
    sub_type?: number
    name: string
    type: string
    follow_res?: FollowRes
    unfollow_res?: UnfollowRes
    params: ToolbarMenuParams
    scheme: string
    pic?: string
    is_expand?: number
    actionlog?: ActionLog
}

export interface ActionLog {
    act_code: number
    ext: string
    luicode: null
    uicode?: null
    fid: string
    lfid: null
}

export interface FollowRes {
    title: string
    title_color: string
    title_color_dark: string
    pic: string
}

export interface UnfollowRes {
    title: string
}

export interface ToolbarMenuParams {
    type?: string
    uid?: string
    scheme?: string
}
