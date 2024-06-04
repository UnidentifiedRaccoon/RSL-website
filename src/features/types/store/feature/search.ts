import {WordScheme} from "../../simplified-strapi/collection-types/word";

export interface SearchData {
    words: WordScheme[]
    substring: string
}
