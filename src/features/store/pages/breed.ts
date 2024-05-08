import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {AppDispatch, RootState} from "../store";
import {PageBreedData} from "../../types/store/pages/breed";
import {getModules} from "../../api/page/breed";
import {moduleParser} from "../../parsers/webservice-to-store/module";


const initialState: PageBreedData = {
    modules: []
}

export const pageBreedState = createSlice({
    name: 'pageBreed',
    initialState,
    reducers: {
        updatePageBreed: (state, {payload}: PayloadAction<PageBreedData>) => {
            state.modules = payload.modules
        },
    },
})
export const { updatePageBreed } = pageBreedState.actions
export const selectPageBreed = (state: RootState) => state.pageBreed
export const loadPageBreed = () => {
    return (dispatch: AppDispatch) => {
        return getModules().then((module) => {
            const parsed = module.map(moduleParser)
            dispatch(updatePageBreed({modules: parsed}))
            console.log({type: 'info', body: 'success loadPageBreed'})
        }).catch((err) => console.log({type: 'error', body: err}))
    }
}

export default pageBreedState.reducer
