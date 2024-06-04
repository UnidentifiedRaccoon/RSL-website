import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from "../store";
import {SearchData} from "../../types/store/feature/search";
import {getWordsBySubstring} from "../../api/feature/search";

const initialState: SearchData = {
    words: [],
    substring: ''
}

export const searchState = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearch: (state, {payload}: PayloadAction<SearchData>) => {
            state.words = payload.words
            state.substring = payload.substring
        },
    },
})

export const {updateSearch} = searchState.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.search

export const findWords = (substring: string) => {
    return (dispatch: AppDispatch) => {
        return getWordsBySubstring(substring).then((res) => {
            const parsed = res.data
            dispatch(updateSearch({
                words: substring ? parsed : [],
                substring
            }))
            console.log({type: 'info', body: 'success findWord'})
        }).catch((err) => console.log({type: 'error', body: err}))
    }
}

export default searchState.reducer
