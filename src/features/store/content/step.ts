import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from "../store";
import {ReleaseStatusEnum} from "../../types/strapi/components/common-enums/release-status";
import {StepData} from "../../types/store/content/step";
import {StepTypesEnum} from "../../types/strapi/components/common-enums/step-types";
import {getStep} from "../../api/content/step";
import {stepParser} from "../../parsers/webservice-to-store/step";

const initialState: StepData = {
    id: 0,
    title: '',
    description: undefined,
    status: ReleaseStatusEnum.DEVELOP,
    type: StepTypesEnum.READ,
    content: [],
}

export const stepState = createSlice({
    name: 'step',
    initialState,
    reducers: {
        updateStep: (state, {payload}: PayloadAction<StepData>) => {
            state.id = payload.id
            state.title = payload.title
            state.description = payload.description
            state.status = payload.status
            state.type = payload.type
            state.content = payload.content
        },
    },
})

export const {updateStep} = stepState.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStep = (state: RootState) => state.step

export const loadStep = (id: number) => {
    return (dispatch: AppDispatch) => {
        return getStep(id).then((step) => {
            const parsed = stepParser(step)
            dispatch(updateStep(parsed))
            console.log({type: 'info', body: 'success loadStep'})
        }).catch((err) => console.log({type: 'error', body: err}))
    }
}

export default stepState.reducer
