import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DictionaryPageData} from "../../types/store/pages/dictionary";
import {AppDispatch, RootState} from "../store";
import {getCategories} from "../../api/page/dictionary";
import {categoryParser} from "../../parsers/strapi-to-store/category";

const initialState: DictionaryPageData = {
    categories: []
}

export const dictionaryPageState = createSlice({
    name: 'dictionaryPage',
    initialState,
    reducers: {
        updateDictionaryPage: (state, {payload}: PayloadAction<DictionaryPageData>) => {
            state.categories = payload.categories
        },
    },
})
export const {updateDictionaryPage} = dictionaryPageState.actions
export const selectDictionaryPage = (state: RootState) => state.dictionaryPage
export const loadDictionaryPage = () => {
    return (dispatch: AppDispatch) => {
        return getCategories().then((res) => {
            const parsed = res.data.map(categoryParser)
            dispatch(updateDictionaryPage({categories: parsed}))
            console.log({type: 'info', body: 'success loadDictionaryPage'})
        }).catch((err) => console.log({type: 'error', body: err}))
    }
}

export default dictionaryPageState.reducer
