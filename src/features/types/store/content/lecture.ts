import {StepData} from "./step";
import {ReleaseStatusEnum} from "../../webservice/shared/release-status";

export interface LectureData {
    id: number
    title: string
    description?: string
    status?: ReleaseStatusEnum
    steps?: StepData[]
}
