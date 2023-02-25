export type Card = Type9Card | Type11Card

export interface Type11Card {
    card_type: 11
    show_type: number
    card_group?: Type9Card[]
}

export interface Type9Card {
    card_type: 9
    mblog: CardMblog
    display_followbtn: number
    itemid: string
    actionlog: Log
    cate_id: string
    display_arrow: number
    show_type: number
    scheme: string
    container_color: string
    container_color_dark: string
    barrage_speed: number
    flow_comment_row: number
    bgcolor: string
    bgcolor_dark: string
    bgtop_img: string
    bgbottom_img: string
    bgtop_img_dark: string
    bgbottom_img_dark: string
    margin_left: number
    margin_right: number
    margin_top: number
    margin_bottom: number
    bg_border_color: string
    bg_border_color_dark: string
    bg_border_radius: number
    title_info: TitleInfo
    content_info: ContentInfo
    flow_comments: FlowComment[]
    analysis_extra: string
    is_hotweibo: number
    display_socialtitle: number
    card_type_name: string
    is_asyn: number
    async_api: string
    title: string
}

export interface TitleInfo {
    leftimg: string
    leftimg_width: number
    leftimg_height: number
}

export interface ContentInfo {
    cover_img: string
    cover_radius: number
    label_img: string
    label_img_width: number
    label_img_height: number
    show_entry_btn: boolean
    title: Desc1[]
    desc1: Desc1[]
    desc2: Desc1[]
    btn_text: string
    btn_color: string
    btn_color_dark: string
    btn_border_color: string
    btn_border_color_dark: string
    btn_scheme: string
    actionlog: Log
}

export interface FlowComment {
    bgcolor: string
    bgcolor_dark: string
    user: FlowCommentUser
    mid: string
    is_guest: number
    text: string
    scheme: string
    actionlog: Log
}

export interface Desc1 {
    type: string
    style: Style
    content: string
}

export interface Log {
    act_code: number
    ext: string
    luicode: null
    uicode?: null
    fid: string
    lfid: null
    cardid?: string
}

export interface Style {
    textColor: string
    textColorKey: string
    textSize: number
    bold?: number
}

export interface FlowCommentUser {
    avatar_large: string
    id: number
    idstr: string
    name: string
    profile_image_url: string
    screen_name: string
    type: number
    uid: string
    verified: boolean | string
    verified_type: number
    verified_type_ext: number | string
}

export interface CardMblog {
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
    edit_at?: string
    edit_count?: number
    extern_safe: number
    f_level: number
    f_level_1: number
    f_level_2: number
    falls_pic_focus_point: any[]
    fans: number
    favorited: boolean
    hot_page: HotPage
    id: string
    isLongText: boolean
    is_paid: boolean
    label?: string
    mblog_vip_type: number
    mblogtype: number
    mid: string
    mlevel: number
    new_comment_style: number
    number_display_strategy: NumberDisplayStrategy
    original_pic: string
    pending_approval_count: number
    picStatus: string
    pic_flag: number
    pic_focus_point: PicFocusPoint[]
    pic_ids: string[]
    pic_num: number
    pic_rectangle_object: any[]
    region_name: string
    region_opt: number
    reposts_count: number
    reprint_cmt_count: number
    rid: string
    safe_tags?: number
    show_additional_indication: number
    show_mlevel: number
    source: string
    status: number
    status_city: string
    status_country: string
    status_province: string
    text: string
    textLength: number
    thumbnail_pic: string
    user: FluffyUser
    visible: Visible
    replace_card_scheme?: number
    content_auth_exemption: number
    content_auth_info: ContentAuthInfo
    content_auth_info_dark: ContentAuthInfo
    button_business_no: string
    buttons: MblogButton[]
    itemid: null
    analysis_extra: string
    page_info: FluffyPageInfo
    pics: FluffyPic[]
    bid: string
    ac_stat?: string
    dispatch_ctrl?: number
    oversea_filter?: string
    oversea_pass?: string
    social_time_info?: string
}

export interface FluffyUser {
    id: number
    screen_name: string
    profile_image_url: string
    profile_url: string
    statuses_count: number
    verified: boolean
    verified_type: number
    verified_type_ext?: number
    verified_reason?: string
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
}

export enum Gender {
    F = "f",
    M = "m",
}

export interface Visible {
    list_id: number
    type: number
}

export interface ContentAuthInfo {
    content_auth_title: string
    content_auth_title_color: string
    content_auth_border_color: string
}

export interface MblogButton {
    sub_type: number
    name: string
    pic: string
    scheme: string
    params: TentacledParams
    show_loading: number
    type: string
    actionlog: Log
}

export interface FluffyPageInfo {
    type: string
    object_type: number
    page_pic: LinksClass
    page_url: string
    page_title: string
    content1: string
}

export interface FluffyPic {
    pid: string
    url: string
    size: string
    geo: PurpleGeo
    large: Large
}

export interface TentacledParams {
    type: string
    uid: number
    extparams: Extparams
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

export interface PicFocusPoint {
    focus_point: FocusPoint
    pic_id: string
}

export interface Extparams {
    followcardid: string
}

export interface FocusPoint {
    height: number
    left: number
    top: number
    width: number
    type?: number
}

export interface LinksClass {
    url: string
}

export interface PurpleGeo {
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
