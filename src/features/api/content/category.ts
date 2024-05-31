import {getCategoryURL} from "../constants";
import {CategoryScheme} from "../../types/simplified-strapi/collection-types/category";
import {StrapiSimpleResponceScheme} from "../../types/strapi/strapi";

export const getCategory = (slug: string): Promise<StrapiSimpleResponceScheme<CategoryScheme[]>> => {
    return fetch(getCategoryURL(slug)).then(res => res.json());
}
