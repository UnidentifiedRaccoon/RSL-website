import {StepScheme} from "../../types/webservice/step";
import {StepData} from "../../types/store/content/step";

export const stepParser = (data: StepScheme): StepData => {
    return {
        ...data
    }
}
