import { Card, Log } from "../../types/card.ts"

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
    params: ToolbarMenuParams
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

export interface ToolbarMenuParams {
    type?: string
    uid?: string
    scheme?: string
}

export interface UnfollowRes {
    title: string
}

export interface URL {
    name: string
    scheme: string
    scheme_wbox?: string
    status: string
}

export interface EXTTrans {
    search_ssid: string
}
