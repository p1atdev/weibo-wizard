import { Card } from "./common.ts"

export interface ContainerGetIndexUserRes {
    ok: number
    data: ContainerGetIndexUserResData
}

export interface ContainerGetIndexUserResData {
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
