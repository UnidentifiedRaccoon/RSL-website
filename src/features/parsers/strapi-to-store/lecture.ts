import {stepParser} from "./step";
import {StrapiDataScheme} from "../../types/strapi/strapi";
import {LectureScheme} from "../../types/strapi/collection-types/lecture";
import {LectureData} from "../../types/store/content/lecture";

export const lectureParser = (data: StrapiDataScheme<LectureScheme>): LectureData => {
    return {
        id: data.id,
        title: data.attributes.title,
        description: data.attributes.description,
        status: data.attributes?.status?.status,
        steps: data.attributes?.steps?.data.map((step) => stepParser(step))
    }
}
