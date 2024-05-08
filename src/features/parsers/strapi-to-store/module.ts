import {lectureParser} from "./lecture";
import {StrapiDataScheme} from "../../types/strapi/strapi";
import {ModuleData} from "../../types/store/content/module";
import {ModuleScheme} from "../../types/strapi/collection-types/module";
export const moduleParser = (data: StrapiDataScheme<ModuleScheme>): ModuleData => {
    return {
        id: data.id,
        title: data.attributes.title,
        description: data.attributes.description,
        status: data.attributes.status.status,
        lectures: data.attributes.lectures.data.map((lecture) => lectureParser(lecture))
    }
}
