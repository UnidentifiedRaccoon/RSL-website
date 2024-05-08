import {LectureData} from "../../types/store/content/lecture";
import {LectureScheme} from "../../types/webservice/lecture";

export const lectureParser = (data: LectureScheme): LectureData => {
    return {
        ...data
    }
}
