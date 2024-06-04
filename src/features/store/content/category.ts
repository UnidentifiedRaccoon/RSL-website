import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../store";
import {categoryParser} from "../../parsers/strapi-to-store/category";
import {CategoryScheme} from "../../types/simplified-strapi/collection-types/category";
import {getCategory} from "../../api/content/category";
import {getWordsBySubstring} from "../../api/feature/search";

const initialState: CategoryScheme = {
    id: 0,
    slug: '',
    title: '',
    description: '',
    imageURL: '',
    order: 0,
    words: [],
}

export const categoryState = createSlice({
    name: 'category',
    initialState,
    reducers: {
        updateCategory: (state, {payload}: PayloadAction<CategoryScheme>) => {
            state.id = payload.id
            state.title = payload.title
            state.description = payload.description
            state.slug = payload.slug
            state.imageURL = payload.imageURL
            state.order = payload.order
            state.words = payload.words
        },
    },
})
export const {updateCategory} = categoryState.actions
export const selectCategory = (state: RootState) => state.category
export const loadCategory = (slug: string) => {
    return (dispatch: AppDispatch): Promise<void | CategoryScheme> => {
        return getCategory(slug).then((res) => {
            const parsed = categoryParser(res.data[0])
            dispatch(updateCategory({...parsed}))
            console.log({type: 'info', body: 'success loadCategory'})
            return parsed
        }).catch((err) => console.log({type: 'error', body: err}))
    }
}

export const loadSearchCategory = (substring: string) => {
    return (dispatch: AppDispatch): Promise<void | CategoryScheme> => {
        return getWordsBySubstring(substring).then((res) => {
            const parsed = res.data
            const category = {
                ...initialState,
                slug: 'search',
                title: 'Поиск',
                words: parsed
            }
            dispatch(updateCategory(category))
            console.log({type: 'info', body: 'success findWord'})
        }).catch((err) => console.log({type: 'error', body: err}))
    }
}


export default categoryState.reducer
