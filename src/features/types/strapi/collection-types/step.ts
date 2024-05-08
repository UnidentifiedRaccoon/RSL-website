import {ReleaseStatus} from "../components/common-enums/release-status";
import {StepTypes} from "../components/common-enums/step-types";

export interface StepScheme {
    title: string
    description?: string
    type: StepTypes
    status: ReleaseStatus
}
