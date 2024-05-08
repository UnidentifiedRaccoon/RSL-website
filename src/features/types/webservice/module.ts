import {ReleaseStatusEnum} from "./shared/release-status";
import {LectureScheme} from "./lecture";

export interface ModuleScheme {
    id: number
    title: string
    description?: string
    status: ReleaseStatusEnum
    lectures: LectureScheme[]
}
