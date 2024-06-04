interface NeiroPrediction {
    confidence: number,
    class: string,
}

export interface NeiroHistory {

    predictions: NeiroPrediction[]
    image: string | null
}

export interface NeiroData {
    history: NeiroHistory[]
    currentImage: string | null
}
