import {ReleaseStatusEnum} from "./shared/release-status";
import {StepTypesEnum} from "./shared/step-types";

export interface StepScheme {
    id: number
    title: string
    description?: string
    type: StepTypesEnum
    status: ReleaseStatusEnum
}
