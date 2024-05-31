import {CategoryScheme} from "../../types/simplified-strapi/collection-types/category";

export const categoryParser = (data: CategoryScheme): CategoryScheme => {
    return {
        ...data,
    }
}
