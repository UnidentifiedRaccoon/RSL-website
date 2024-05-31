import {getCategoriesURL} from "../constants";
import {CategoryScheme} from "../../types/simplified-strapi/collection-types/category";
import {StrapiSimpleResponceScheme} from "../../types/strapi/strapi";

export const getCategories = (): Promise<StrapiSimpleResponceScheme<CategoryScheme[]>> => {
    return fetch(getCategoriesURL()).then(res => res.json());
}
