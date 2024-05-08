import {LectureData} from "./lecture";
import {ReleaseStatusEnum} from "../../webservice/shared/release-status";

export interface ModuleData {
    id: number
    title: string
    description?: string
    status?: ReleaseStatusEnum
    lectures?: LectureData[]
}
