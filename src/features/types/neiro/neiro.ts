export interface NeiroSheme {
    "x": number,
    "y": number,
    "width": number,
    "height": number,
    "confidence": number,
    "class": string,
    "class_id": number
}

export interface NeiroResponceSheme {
    "predictions": NeiroSheme[]
}
