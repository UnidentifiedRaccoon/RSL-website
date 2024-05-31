import {WordScheme} from "./word";

export interface CategoryScheme {
    id: number
    slug: string
    title: string
    description: string
    imageURL: string
    order: number
    words?: WordScheme[]
}
