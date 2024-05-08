import {StrapiDataScheme} from "../../types/strapi/strapi";
import {StepScheme} from "../../types/strapi/collection-types/step";
import {StepData} from "../../types/store/content/step";


export const stepParser = (data: StrapiDataScheme<StepScheme>): StepData => {
    return {
        id: data.id,
        title: data.attributes.title,
        description: data.attributes.description,
        status: data.attributes?.status?.status,
        type: data.attributes?.type?.type,
        content: data.attributes?.content ? data.attributes.content[0].text : ''
    }
}
