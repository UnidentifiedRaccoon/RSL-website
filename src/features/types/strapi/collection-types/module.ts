import {ReleaseStatus} from "../components/common-enums/release-status";
import {StrapiArrayScheme} from "../strapi";
import {LectureScheme} from "./lecture";

export interface ModuleScheme {
    title: string
    description?: string
    status: ReleaseStatus
    lectures: StrapiArrayScheme<LectureScheme>
}
