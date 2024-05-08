import {ReleaseStatus} from "../components/common-enums/release-status";
import {StepScheme} from "./step";
import {StrapiArrayScheme} from "../strapi";

export interface LectureScheme {
    title: string
    description?: string
    status: ReleaseStatus
    steps: StrapiArrayScheme<StepScheme>
}
