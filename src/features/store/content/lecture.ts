import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from "../store";
import {ReleaseStatusEnum} from "../../types/strapi/components/common-enums/release-status";
import {LectureData} from "../../types/store/content/lecture";
import {getLecture} from "../../api/content/lecture";
import {lectureParser} from "../../parsers/webservice-to-store/lecture";

const initialState: LectureData = {
    id: 0,
    title: '',
    description: undefined,
    status: ReleaseStatusEnum.DEVELOP,
    steps: []
}

export const lectureState = createSlice({
    name: 'lecture',
    initialState,
    reducers: {
        updateLecture: (state, {payload}: PayloadAction<LectureData>) => {
            state.id = payload.id
            state.title = payload.title
            state.description = payload.description
            state.status = payload.status
            state.steps = payload.steps
        },
    },
})

export const {updateLecture} = lectureState.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLecture = (state: RootState) => state.lecture

export const loadLecture = (id: number) => {
    return (dispatch: AppDispatch) => {
        return getLecture(id).then((lecture) => {
            const parsed = lectureParser(lecture)
            dispatch(updateLecture(parsed))
            // console.log({type: 'info', body: 'success loadLecture'})
        }).catch((err) => console.log({type: 'error', body: err.message}))
    }
}

export default lectureState.reducer
