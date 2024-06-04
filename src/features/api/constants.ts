export const WEBSERVICE_HOST = 'http://51.250.97.205:8080'
export const WEBSERVICE_API_PREFIX = '/platform-api'
export const MODULES = '/modules'
export const LESSON = '/lessons'
export const STEPS = '/steps'
export const CATEGORIES = '/categories'
export const WORDS = '/words'

export const STRAPI_HOST = 'http://51.250.97.205:1337'
export const STRAPI_API_PREFIX = '/api'
export const NEIRO_URL = 'https://detect.roboflow.com/sign-language-recognition-mmbok/1?api_key=rbhBeux1LGVsZeGa8lpy'

export const getModulesURL = () => WEBSERVICE_HOST + WEBSERVICE_API_PREFIX + MODULES
export const getModuleURL = (id: number) => WEBSERVICE_HOST + WEBSERVICE_API_PREFIX + MODULES + `/${id}`
export const getLessonURL = (id: number) => WEBSERVICE_HOST + WEBSERVICE_API_PREFIX + LESSON + `/${id}`
export const getStepURL = (id: number) => WEBSERVICE_HOST + WEBSERVICE_API_PREFIX + STEPS + `/${id}`
export const getCategoriesURL = () => STRAPI_HOST + STRAPI_API_PREFIX + CATEGORIES
export const getCategoryURL = (slug: string) => STRAPI_HOST + STRAPI_API_PREFIX + CATEGORIES + `?publicationState=preview&populate=*&filters[slug]=${slug}`
export const getWordsBySubstringURL = (substring: string) => STRAPI_HOST + STRAPI_API_PREFIX + WORDS + `?filters[spelling][$containsi]=${substring}&pagination[pageSize]=10&pagination[page]=1`
export const getNeiroURL = () => NEIRO_URL
