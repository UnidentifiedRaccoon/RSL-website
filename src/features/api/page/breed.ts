import {getModulesURL} from "../constants";
import {ModuleScheme} from "../../types/webservice/module";

export const getModules = (): Promise<ModuleScheme[]> => {
    return fetch(getModulesURL()).then(res => res.json());
}
