import {WordScheme} from "../../types/simplified-strapi/collection-types/word";
import {StrapiSimpleResponceScheme} from "../../types/strapi/strapi";
import {getWordsBySubstringURL} from "../constants";

export const getWordsBySubstring = (substring: string): Promise<StrapiSimpleResponceScheme<WordScheme[]>> => {
    return fetch(getWordsBySubstringURL(substring)).then(res => res.json());
}
