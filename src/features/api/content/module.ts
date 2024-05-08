import {getModuleURL} from "../constants";
import {ModuleScheme} from "../../types/webservice/module";

export const getModule = (id: number): Promise<ModuleScheme> => {
    return fetch(getModuleURL(id)).then(res => res.json());
}
