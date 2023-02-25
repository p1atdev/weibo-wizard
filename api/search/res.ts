export interface Res {
    ok: number
    data: Data
}

export interface Data {
    cardlistInfo: CardlistInfo
    cards: Card[]
    ext_trans: EXTTrans
    scheme: string
    showAppTips: number
}

export interface CardlistInfo {
    v_p: string
    containerid: string
    title_top: string
    total: number
    starttime: number
    search_request_id: string
    search_ssid: string
    can_shared: number
    cardlist_head_cards: CardlistHeadCard[]
    toolbar_menus: ToolbarMenu[]
    page_size: string
    hide_oids: string[]
    common_hide_type: { [key: string]: number }
    show_style: number
    cardlist_title: string
    shared_text: string
    share_containerid: string
    object_id: string
    desc: string
    portrait: string
    shared_text_qrcode: string
    share_content: ShareContent
    page: number
}

export interface CardlistHeadCard {
    show_menu: boolean | number
    menu_scheme: string
    title_top?: string
    head_type: number
    head_type_name: string
    head_data?: HeadData
    channel_list?: ChannelList[]
}

export interface ChannelList {
    id: string
    name: string
    default_add: number
    must_show: number
    scheme: string
    containerid: string
    request_mark_interval: number
    actionlog: Log
    type?: string
}

export interface Log {
    act_code: number
    ext: string
    luicode: null
    uicode?: null
    fid: string
    lfid: null
}

export interface HeadData {
    show_blur_background: number
    scheme: string
    width: number
    height: number
    background_url: string
    portrait_url: string
    portrait_sub_text: string
    portrait_sub_text_color: string
    portrait_sub_color: string
    title: string
    midtext: string
    downtext: string
    theme_background_color: string
    actionlog: Log
    bg_img: string
    bg_img_blure: string
    background_scheme: string
    background_actlog: Log
    data_type: number
    title_tag_img: string
    title_tag_width: number
    title_tag_height: number
    ext_card: any[]
    cover_url: null
}

export interface ShareContent {
    custom_share_path: string
    description: string
    icon: string
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
    params: Params
    scheme: string
    pic?: string
    is_expand?: number
    actionlog?: Log
}

export interface FollowRes {
    title: string
    title_color: string
    title_color_dark: string
    pic: string
}

export interface Params {
    type?: string
    uid?: string
    scheme?: string
}

export interface UnfollowRes {
    title: string
}

export interface Card {
    card_type: number
    card_group: CardGroup[]
    show_type: number
}

export interface CardGroup {
    card_type: number
    mblog: Mblog
    display_socialtitle: number
    itemid: string
    actionlog: Log
    cate_id: string
    display_arrow: number
    show_type: number
    scheme: string
    container_color: string
    container_color_dark: string
}

export interface Mblog {
    attitudes_count: number
    bmiddle_pic: string
    can_edit: boolean
    comment_manage_info: CommentManageInfo
    comments_count: number
    content_auth: number
    created_at: string
    darwin_tags: any[]
    delThreeYearsStatus: number
    digit_attr: number
    dispatch_ctrl: number
    extern_safe: number
    f_level: number
    f_level_1: number
    f_level_2: number
    falls_pic_focus_point?: any[]
    fans: number
    favorited: boolean
    hot_page: HotPage
    id: string
    isLongText: boolean
    is_paid: boolean
    mblog_vip_type: number
    mblogtype: number
    mid: string
    mlevel: number
    new_comment_style: number
    number_display_strategy: NumberDisplayStrategy
    original_pic: string
    oversea_filter: string
    oversea_pass: string
    pending_approval_count: number
    picStatus?: string
    pic_flag?: number
    pic_focus_point?: PicFocusPoint[]
    pic_ids: string[]
    pic_num: number
    pic_rectangle_object?: PicRectangleObject[]
    region_name: string
    region_opt: number
    reposts_count: number
    reprint_cmt_count: number
    rid: string
    safe_tags?: number
    show_additional_indication: number
    show_mlevel: number
    social_time_info?: string
    source: string
    status: number
    status_city?: string
    status_country: string
    status_province: string
    text: string
    textLength: number
    thumbnail_pic: string
    user: User
    visible: Visible
    ext_social_time_info: null | string
    is_controlled_by_server?: number
    timestamp_text?: string
    expire_after?: number
    itemid: null
    analysis_extra: string
    page_info: PageInfo
    pics: Pic[]
    bid: string
    is_imported_topic?: boolean
    jump_type?: number
    sync_mblog?: boolean
    topic_id?: string
    cardid?: string
}

export interface CommentManageInfo {
    approval_comment_type: number
    comment_permission_type: number
    comment_sort_type: number
}

export interface HotPage {
    feed_detail_type: number
    fid: string
}

export interface NumberDisplayStrategy {
    apply_scenario_flag: number
    display_text: string
    display_text_min_number: number
}

export interface PageInfo {
    type: string
    object_type: number
    page_pic: PagePic
    page_url: string
    page_title: string
    content1: string
    content2?: string
}

export interface PagePic {
    url: string
}

export interface PicFocusPoint {
    focus_point: FocusPoint
    pic_id: string
}

export interface FocusPoint {
    height: number
    left: number
    top: number
    width: number
    type?: number
}

export interface PicRectangleObject {
    pic_id: string
    rectangle_objects: FocusPoint[]
}

export interface Pic {
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

export interface User {
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
    list_id: number
    type: number
}

export interface EXTTrans {
    search_ssid: string
}
