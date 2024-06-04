import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from "../store";
import {ReleaseStatusEnum} from "../../types/strapi/components/common-enums/release-status";
import {ModuleData} from "../../types/store/content/module";
import {getModule} from "../../api/content/module";
import {moduleParser} from "../../parsers/webservice-to-store/module";

const initialState: ModuleData = {
    id: 0,
    title: '',
    description: undefined,
    status: ReleaseStatusEnum.DEVELOP,
    lectures: []
}

export const moduleState = createSlice({
    name: 'module',
    initialState,
    reducers: {
        updateModule: (state, {payload}: PayloadAction<ModuleData>) => {
            state.id = payload.id
            state.title = payload.title
            state.description = payload.description
            state.status = payload.status
            state.lectures = payload.lectures
        },
    },
})
export const {updateModule} = moduleState.actions
export const selectModule = (state: RootState) => state.module
export const loadModule = (id: number) => {
    return (dispatch: AppDispatch) => {
        return getModule(id).then((module) => {
            const parsed = moduleParser(module)
            dispatch(updateModule(parsed))
            console.log({type: 'info', body: 'success loadModule'})
        }).catch((err) => console.log({type: 'error', body: err}))
    }
}

export default moduleState.reducer
