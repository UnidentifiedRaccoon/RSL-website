import {getStepURL} from "../constants";
import {StepScheme} from "../../types/webservice/step";

export const getStep = (id: number): Promise<StepScheme> => {
    return fetch(getStepURL(id)).then(res => res.json());
}
