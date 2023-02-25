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
    cardid?: string
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

export interface CardGroupButton {
    type: string
    name: string
    name_after?: string
    pic: string
    pic_after?: string
    params: PurpleParams
    sub_type?: number
    itemid?: string
    actionlog: Log
    scheme: string
    skip_format?: number
}

export interface PurpleParams {
    uid?: number
    scheme?: string
}

export interface Group {
    title_sub: string
    scheme: string
    action_log: Log
}

export interface LeftElement {
    right_tag_icon: string
    right_tag_icon_dark: string
    right_tag_text: string
    pic_width: number
    pic_height: number
    right_bottom_text: string
    cover_image: CoverImage
    pic_scheme: string
    element_type: string
    tag_icons: any[]
    tag_infos: any[]
    mblog: LeftElementMblog
    text_lines: number
    text_max_line: number
    right_tag_background: string
    text: string
    text_scheme: string
    itemid: string
    actionlog: Log
    user_actionlog: Log
    buttons: LeftElementButton[]
}

export interface LeftElementButton {
    type: string
    sub_type: number
    skip_format: number
    params: FluffyParams
}

export interface FluffyParams {
    type: string
    attitudes_count: number
    id: string
}

export interface CoverImage {
    url: string
    cut_type: number
}

export interface LeftElementMblog {
    ac_stat: string
    alchemy_params: AlchemyParams
    annotations: Array<any[] | PurpleAnnotation>
    appid: number
    attitude_dynamic_members_message: AttitudeDynamicMembersMessage
    attitudes_count: number
    biz_feature: number
    biz_ids: number[]
    can_edit: boolean
    can_reprint: boolean
    comment_manage_info: CommentManageInfo
    comments_count: number
    content_auth: number
    created_at: string
    darwin_tags: any[]
    delThreeYearsStatus: number
    digit_attr: number
    dispatch_ctrl: number
    extern_safe: number
    extra_info: ExtraInfo
    f_level: number
    f_level_1: number
    f_level_2: number
    fans: number
    favorited: boolean
    fid: number
    geo: null
    gif_ids: string
    hasActionTypeCard: number
    hide_flag: number
    hot_page: HotPage
    hot_weibo_tags: any[]
    id: number
    idstr: string
    in_reply_to_screen_name: string
    in_reply_to_status_id: string
    in_reply_to_user_id: string
    isLongText: boolean
    is_paid: boolean
    is_show_bulletin: number
    mblog_vip_type: number
    mblogtype: number
    mid: string
    mlevel: number
    more_info_type: number
    new_comment_style: number
    number_display_strategy: NumberDisplayStrategy
    oversea_filter: string
    oversea_pass: string
    page_type: number
    pending_approval_count: number
    pic_ids: any[]
    pic_num: number
    pic_types: string
    positive_recom_flag: number
    region_name: string
    region_opt: number
    reposts_count: number
    reprint_cmt_count: number
    reward_exhibition_type: number
    rid: string
    safe_tags: number
    show_additional_indication: number
    show_mlevel: number
    social_time_info: string
    source: string
    source_allowclick: number
    source_type: number
    status: number
    status_city: string
    status_country: string
    status_province: string
    text: string
    textLength: number
    text_tag_tips: any[]
    truncated: boolean
    url_objects: PurpleURLObject[]
    user: PurpleUser
    userType: number
    version: number
    visible: Visible
    analysis_extra: string
}

export interface AlchemyParams {
    ug_red_envelope: boolean
}

export interface PurpleAnnotation {
    mapi_request: boolean
}

export interface AttitudeDynamicMembersMessage {
    bgimg: string
    colorT: string
    default_media_url: string
    media_id: string
    media_url: string
    portrait: string
    protocol: string
    scene_show_option: number
    scheme: string
    user_grace_setting: UserGraceSetting
}

export interface UserGraceSetting {
    zh_CN: string
}

export interface CommentManageInfo {
    approval_comment_type: number
    comment_permission_type: number
    comment_sort_type: number
}

export interface ExtraInfo {
    ID: string
    ac_stat: string
    digit_attr: string
    dispatch_ctrl: string
    f_level: string
    hit_score: string
    kwfilter_pass: string
    simhash_dup: string
    social_time_info: string
    v_dhash: string[]
    v_finger: string[]
    v_phash: string[]
    vote: string
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

export interface PurpleURLObject {
    asso_like_count: number
    card_info_un_integrity: boolean
    expire_time?: number
    follower_count: number
    info?: Info
    isActionType: boolean
    is_follow_object_author?: boolean
    like_count: number
    object: PurpleObject
    object_id: string
    play_count?: number
    search_topic_count: number
    search_topic_mention_day_count: number
    search_topic_read_count: number
    super_topic_photo_count: number
    super_topic_status_count: number
    url_ori: string
    is_follow_object?: boolean
}

export interface Info {
    description: string
    ext_status: number
    last_modified: number
    result: boolean
    title: string
    transcode: number
    trusted_state: number
    type: number
    url_long: string
    url_short: string
}

export interface PurpleObject {
    act_status: string
    activate_status: string
    containerid: string
    is_longtext: boolean
    last_modified: string
    object: FluffyObject
    object_domain_id: string
    object_id: string
    object_type: string
    request_oid: string
    safe_extparam: string
    safe_status: number
    show_status: string
    timestamp: number
    uuid: number
    uuidstr: string
    actions?: Action[]
}

export interface Action {
    name: string
    params: ActionParams
    pic: string
    type: string
}

export interface ActionParams {
    scheme: string
}

export interface FluffyObject {
    appid?: number
    author?: Author
    author_mid?: string
    biz: Biz
    biz_flag?: BizFlag
    biz_type?: string
    client?: string
    compressed_file_meta?: CompressedFileMeta
    copyright?: number
    cover_image?: boolean
    cover_screenshot_meta?: CoverScreenshotMeta
    created_at?: Date
    custom_data?: CustomData
    definition?: string
    display_name: string
    domesticOnly?: boolean
    duration?: number
    embed_code?: string
    ext_info?: EXTInfo
    extension?: PurpleExtension
    fid?: number
    file_create_type?: string
    file_monitor_type?: string
    id: string
    image: PurplePagePic
    input_tags?: InputTags
    links?: LinksClass
    monitor_state?: number
    object_type: string
    object_type_detail?: string
    original_file_md5?: string
    original_url?: string
    protocol?: string
    screenshots?: { [key: string]: string }
    storage_type?: string
    stream?: Stream
    summary: string
    target_url: string
    titles?: Title[]
    updated_at?: Date
    url: string
    urls?: Urls
    video_cover?: string
    video_orientation?: string
    video_type?: string
    action?: string[]
    admin_ad_list?: number[]
    attribute?: string
    cate_id?: string
    category?: string
    create_at?: string
    ever_in_hotsearch?: number
    in_band_type?: string
    location?: string
    mobile?: Mobile
    modify_type?: string
    page_type?: string
    pc_cover?: string
    presenter_status?: number
    room_info?: RoomInfo
    search?: Search
    short_url?: string
    super?: Super
    tid?: string
    topic_band_type?: string
    topic_tag?: string
}

export interface Author {
    avatar_large: string
    display_name: string
    followers_count: number
    id: string
    object_type: string
    verified: boolean
    verified_level: number
    verified_reason: string
    verified_type: number
    verified_type_ext: number
}

export interface Biz {
    biz_id: string
    containerid: string
}

export interface BizFlag {
    contribution: number
    short_video: number
    st_video: number
}

export interface CompressedFileMeta {
    md5: string
    video_media_info: VideoMediaInfo
}

export interface VideoMediaInfo {
    height: number
    width: number
}

export interface CoverScreenshotMeta {
    height: number
    pids: string[]
    width: number
}

export interface CustomData {
    source: string
}

export interface EXTInfo {
    video_orientation: string
}

export interface PurpleExtension {
    extension: FluffyExtension
    feed_upload_type: number
    gid: number
    homemade_biz: PurpleHomemadeBiz
    homemade_original: PurpleHomemadeOriginal
    topics: Topic[]
}

export interface FluffyExtension {
    media_info: PurpleMediaInfo
    upload_type: string
}

export interface PurpleMediaInfo {
    video_down: number
}

export interface PurpleHomemadeBiz {
    monitor_state: number
    type: number
}

export interface PurpleHomemadeOriginal {
    channel_ids: any[]
    channel_ids_original: null[]
    type: number
}

export interface Topic {
    content: string
}

export interface PurplePagePic {
    height?: number
    is_self_cover?: number
    pid?: string
    source?: number
    type?: number
    url: string
    width?: number
}

export interface InputTags {
    creation_time: Date
    location: string
}

export interface LinksClass {
    url: string
}

export interface Mobile {
    page_id: string
    url: URL
}

export interface URL {
    name: string
    scheme: string
    scheme_wbox?: string
    status: string
}

export interface RoomInfo {
    main_topic: string
    room_id: string
    status: string
    updated_at: Date
}

export interface Search {
    image: LinksClass
}

export interface Stream {
    duration: number
    format: string
    hd_url: string
    height: number
    url: string
    width: number
}

export interface Super {
    super_time: string
}

export interface Title {
    default: boolean
    title: string
}

export interface Urls {
    mp4_720p_mp4: string
    mp4_hd_mp4: string
    mp4_ld_mp4: string
}

export interface PurpleUser {
    allow_all_act_msg: boolean
    allow_all_comment: boolean
    avatar_hd: string
    avatar_large: string
    avatar_type: number
    badge: { [key: string]: number }
    badge_top: string
    bi_followers_count: number
    block_app: number
    block_word: number
    brand_ability: number
    brand_account: number
    chaohua_ability: number
    city: string
    class: number
    cover_image: string
    cover_image_phone: string
    created_at: string
    credit_score: number
    description: string
    domain: string
    ecommerce_ability: number
    extend: Extend
    favourites_count: number
    follow_me: boolean
    followers_count: number
    followers_count_str: string
    following: boolean
    friends_count: number
    gender: Gender
    geo_enabled: boolean
    gongyi_ability: number
    green_mode: number
    hardfan_ability: number
    has_ability_tag: number
    hongbaofei: number
    id: number
    idstr: string
    insecurity: Insecurity
    is_guardian: number
    is_teenager: number
    is_teenager_list: number
    lang: string
    level: number
    light_ring: boolean
    like: boolean
    like_me: boolean
    live_ability: number
    live_status: number
    location: string
    mb_expire_time: number
    mb_like_privilege?: MBLikePrivilege
    mbrank: number
    mbtype: number
    name: string
    newbrand_ability: number
    nft_ability: number
    online_status: number
    pagefriends_count: number
    paycolumn_ability: number
    pc_new: number
    planet_video: number
    profile_image_url: string
    profile_url: string
    province: string
    ptype: number
    remark: string
    reward_status: number
    screen_name: string
    special_follow: boolean
    star: number
    statuses_count: number
    story_read_state: number
    super_topic_not_syn_count: number
    svip: number
    tab_manage: string
    type: number
    ulevel: number
    unfollowing_recom_switch: number
    urank: number
    urisk: number
    url: string
    user_ability: number
    user_ability_extend: number
    user_limit: number
    vclub_member: number
    verified: boolean
    verified_reason: string
    verified_reason_url: string
    verified_source: string
    verified_source_url: string
    verified_trade: string
    verified_type: number
    video_mark: number
    video_play_count: number
    video_status_count: number
    vplus_ability: number
    wbcolumn_ability: number
    weihao: string
    wenda_ability: number
    avatargj_id?: string
    cardid?: string
    status_total_counter?: StatusTotalCounter
    video_total_counter?: VideoTotalCounter
}

export interface Extend {
    mbprivilege: string
    privacy: Privacy
}

export interface Privacy {
    mobile: number
}

export enum Gender {
    F = "f",
    M = "m",
}

export interface Insecurity {
    sexual_content: boolean
}

export interface MBLikePrivilege {
    like_desc: string
    like_id: string
}

export interface StatusTotalCounter {
    comment_cnt: number
    comment_like_cnt: number
    like_cnt: number
    repost_cnt: number
    total_cnt: number
}

export interface VideoTotalCounter {
    play_cnt: number
}

export interface Visible {
    list_id: number
    type: number
}

export interface CardGroupMblog {
    ac_stat: string
    ad_state?: number
    attitude_dynamic_adid?: string
    attitudes_count: number
    bmiddle_pic?: string
    can_edit: boolean
    cardid?: string
    comment_manage_info: CommentManageInfo
    comments_count: number
    content_auth: number
    created_at: string
    darwin_tags: DarwinTag[]
    delThreeYearsStatus: number
    digit_attr: number
    dispatch_ctrl: number
    expire_time?: number
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
    is_imported_topic?: boolean
    is_paid: boolean
    jump_type?: number
    mark?: string
    mblog_vip_type: number
    mblogtype: number
    mid: string
    mlevel: number
    new_comment_style: number
    number_display_strategy: NumberDisplayStrategy
    original_pic?: string
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
    status_city: string
    status_country: string
    status_province: string
    sync_mblog?: boolean
    text: string
    textLength: number
    thumbnail_pic?: string
    topic_id?: string
    user: FluffyUser
    visible: Visible
    content_auth_exemption?: number
    content_auth_info?: ContentAuthInfo
    content_auth_info_dark?: ContentAuthInfo
    button_business_no?: string
    buttons?: MblogButton[]
    itemid: null
    analysis_extra: string
    page_info: PurplePageInfo
    pics?: PurplePic[]
    bid: string
    fid?: number
    ext_social_time_info?: null | string
    is_controlled_by_server?: number
    timestamp_text?: string
    expire_after?: number
    edit_at?: string
    edit_count?: number
    filterID?: string
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

export interface TentacledParams {
    type: string
    uid: number
    extparams: Extparams
}

export interface Extparams {
    followcardid: string
}

export interface ContentAuthInfo {
    content_auth_title: string
    content_auth_title_color: string
    content_auth_border_color: string
}

export interface DarwinTag {
    bd_object_type: string
    display_name: string
    enterprise_uid: null
    mapi_url: string
    object_id: string
    object_type: string
    pc_url: string
}

export interface PurplePageInfo {
    type: string
    object_type: number
    page_pic: PurplePagePic
    page_url: string
    page_title: string
    content1: string
    url_ori?: string
    object_id?: string
    title?: string
    content2?: string
    video_orientation?: string
    play_count?: string
    media_info?: PageInfoMediaInfo
    urls?: Urls
}

export interface PageInfoMediaInfo {
    stream_url: string
    stream_url_hd: string
    duration: number
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

export interface PurplePic {
    pid: string
    url: string
    size: string
    geo: LargeGeo
    large: Large
}

export interface LargeGeo {
    width: number | string
    height: number | string
    croped: boolean
}

export interface Large {
    size: string
    url: string
    geo: LargeGeo
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

export interface RightElement {
    right_tag_icon: string
    right_tag_icon_dark: string
    right_tag_text: string
    pic_width: number
    pic_height: number
    right_bottom_text: string
    cover_image: CoverImage
    pic_scheme: string
    element_type: string
    tag_icons: any[]
    tag_infos: any[]
    mblog: RightElementMblog
    text_lines: number
    text_max_line: number
    right_tag_background: string
    text: string
    text_scheme: string
    itemid: string
    actionlog: Log
    user_actionlog: Log
    buttons: LeftElementButton[]
}

export interface RightElementMblog {
    ac_stat: string
    alchemy_params: AlchemyParams
    annotations: Array<any[] | FluffyAnnotation>
    appid: number
    attitudes_count: number
    biz_feature: number
    biz_ids: number[]
    can_edit: boolean
    can_reprint: boolean
    comment_manage_info: CommentManageInfo
    comments_count: number
    content_auth: number
    created_at: string
    darwin_tags: any[]
    delThreeYearsStatus: number
    digit_attr: number
    dispatch_ctrl: number
    extern_safe: number
    extra_info: ExtraInfo
    f_level: number
    f_level_1: number
    f_level_2: number
    fans: number
    favorited: boolean
    fid: number
    geo: null
    gif_ids: string
    hasActionTypeCard: number
    hide_flag: number
    hot_page: HotPage
    hot_weibo_tags: any[]
    id: number
    idstr: string
    in_reply_to_screen_name: string
    in_reply_to_status_id: string
    in_reply_to_user_id: string
    isLongText: boolean
    is_paid: boolean
    is_show_bulletin: number
    mblog_vip_type: number
    mblogtype: number
    mid: string
    mlevel: number
    more_info_type: number
    new_comment_style: number
    number_display_strategy: NumberDisplayStrategy
    oversea_filter: string
    oversea_pass: string
    page_type: number
    pending_approval_count: number
    pic_ids: any[]
    pic_num: number
    pic_types: string
    positive_recom_flag: number
    region_name: string
    region_opt: number
    reposts_count: number
    reprint_cmt_count: number
    reward_exhibition_type: number
    rid: string
    safe_tags: number
    show_additional_indication: number
    show_mlevel: number
    social_time_info: string
    source: string
    source_allowclick: number
    source_type: number
    status: number
    status_city: string
    status_country: string
    status_province: string
    text: string
    textLength: number
    text_tag_tips: any[]
    truncated: boolean
    url_objects: FluffyURLObject[]
    user: PurpleUser
    userType: number
    version: number
    visible: Visible
    analysis_extra: string
}

export interface FluffyAnnotation {
    client_mblogid?: string
    mapi_request?: boolean
}

export interface FluffyURLObject {
    asso_like_count: number
    card_info_un_integrity: boolean
    expire_time?: number
    follower_count: number
    info?: Info
    isActionType: boolean
    is_follow_object_author?: boolean
    like_count: number
    object: TentacledObject
    object_id: string
    play_count?: number
    search_topic_count: number
    search_topic_mention_day_count: number
    search_topic_read_count: number
    super_topic_photo_count: number
    super_topic_status_count: number
    url_ori: string
    is_follow_object?: boolean
}

export interface TentacledObject {
    act_status: string
    activate_status: string
    containerid: string
    is_longtext: boolean
    last_modified: string
    object: StickyObject
    object_domain_id: string
    object_id: string
    object_type: string
    request_oid: string
    safe_extparam: string
    safe_status: number
    show_status: string
    timestamp: number
    uuid: number
    uuidstr: string
    actions?: Action[]
}

export interface StickyObject {
    appid?: number
    author?: Author
    author_mid?: string
    biz: Biz
    biz_flag?: BizFlag
    biz_type?: string
    client?: string
    compressed_file_meta?: CompressedFileMeta
    copyright?: number
    cover_image?: boolean
    created_at?: Date
    custom_data?: CustomData
    definition?: string
    display_name: string
    domesticOnly?: boolean
    duration?: number
    embed_code?: string
    ext_info?: EXTInfo
    extension?: TentacledExtension
    fid?: number
    file_create_type?: string
    file_monitor_type?: string
    id: string
    image: PurplePagePic
    input_tags?: InputTags
    links?: LinksClass
    monitor_state?: number
    object_type: string
    object_type_detail?: string
    origin_total_bitrate?: number
    original_file_md5?: string
    original_url?: string
    protocol?: string
    screenshots?: { [key: string]: string }
    storage_type?: string
    stream?: Stream
    summary: string
    target_url: string
    titles?: Title[]
    updated_at?: Date
    url: string
    urls?: Urls
    video_cover?: string
    video_orientation?: string
    video_type?: string
    action?: string[]
    attribute?: string
    cate_id?: string
    category?: string
    create_at?: string
    in_band_type?: number | string
    location?: string
    mobile?: Mobile
    modify_type?: number | string
    page_type?: string
    presenter_status?: number
    short_url?: string
    tid?: string
    topic_band_type?: number | string
    admin_ad_list?: number[]
    ever_in_hotsearch?: number
    pc_cover?: string
    room_info?: RoomInfo
    search?: Search
    super?: Super
    topic_tag?: string
}

export interface TentacledExtension {
    cluster_type_status: Gender
    extension: StickyExtension
    feed_upload_type: number
    gid: number
    homemade_biz: FluffyHomemadeBiz
    homemade_original: FluffyHomemadeOriginal
    topics: Topic[]
}

export interface StickyExtension {
    media_info: FluffyMediaInfo
    upload_type: string
}

export interface FluffyMediaInfo {
    is_duet: string
    video_down: number
    video_reward: number
}

export interface FluffyHomemadeBiz {
    first_level_channels: LevelChannel[]
    monitor_state: number
    script_type: number
    second_level_channels: LevelChannel[]
    type: number
}

export interface LevelChannel {
    id: number
    name: string
}

export interface FluffyHomemadeOriginal {
    channel_ids: number[]
    channel_ids_original: number[]
    forward_strategy: number
    script_type: number
    type: number
}

export interface CardGroupUser {
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
    desc1: string
    avatar_hd: string
    like: boolean
    like_me: boolean
    badge?: Badge
}

export interface Badge {
    user_name_certificate: number
    pc_new: number
    brand_account_2021: number
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

export interface Desc1 {
    type: string
    style: Style
    content: string
}

export interface Style {
    textColor: string
    textColorKey: string
    textSize: number
    bold?: number
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

export interface PurpleGeo {
    width: number
    height: number
    croped: boolean
}

export interface TitleInfo {
    leftimg: string
    leftimg_width: number
    leftimg_height: number
}

export interface EXTTrans {
    search_ssid: string
}
