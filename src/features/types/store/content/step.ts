import {ReleaseStatusEnum} from "../../webservice/shared/release-status";
import {StepTypesEnum} from "../../webservice/shared/step-types";

export interface StepData {
    id: number
    title: string
    description?: string
    status?: ReleaseStatusEnum
    type?: StepTypesEnum
    content?: any[]
}
