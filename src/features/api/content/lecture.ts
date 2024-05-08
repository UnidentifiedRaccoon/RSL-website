import {getLessonURL} from "../constants";
import {LectureScheme} from "../../types/webservice/lecture";

export const getLecture = (id: number): Promise<LectureScheme> => {
    return fetch(getLessonURL(id)).then(res => res.json());
}
