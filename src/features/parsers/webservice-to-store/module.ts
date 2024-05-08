import {ModuleScheme} from "../../types/webservice/module";
import {ModuleData} from "../../types/store/content/module";
export const moduleParser = (data: ModuleScheme): ModuleData => {
    return {
        ...data,
    }
}
