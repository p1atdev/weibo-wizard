import { Card } from "../../types/card.ts"

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
