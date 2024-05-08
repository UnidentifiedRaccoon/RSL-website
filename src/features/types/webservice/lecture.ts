import {StepScheme} from "./step";
import {ReleaseStatusEnum} from "./shared/release-status";

export interface LectureScheme {
    id: number
    title: string
    description?: string
    status: ReleaseStatusEnum
    steps: StepScheme[]
}
