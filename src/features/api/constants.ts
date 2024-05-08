export const WEBSERVICE_HOST = 'http://51.250.97.205:8080'
export const API_PREFIX = '/platform-api'
export const MODULES = '/modules'
export const LESSON = '/lessons'
export const STEPS = '/steps'

export const getModulesURL = () => WEBSERVICE_HOST + API_PREFIX + MODULES
export const getModuleURL = (id: number) => WEBSERVICE_HOST + API_PREFIX + MODULES + `/${id}`
export const getLessonURL = (id: number) => WEBSERVICE_HOST + API_PREFIX + LESSON + `/${id}`
export const getStepURL = (id: number) => WEBSERVICE_HOST + API_PREFIX + STEPS + `/${id}`
