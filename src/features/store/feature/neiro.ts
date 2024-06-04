import type {PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {NeiroData, NeiroHistory} from "../../types/store/feature/neiro";
import {sendFileToNeiro} from "../../api/feature/neiro";

const initialState: NeiroData = {
    history: [],
    currentImage: ''
}

export const neiroState = createSlice({
    name: 'neiro',
    initialState,
    reducers: {
        updateNeiro: (state, {payload}: PayloadAction<NeiroHistory>) => {
            state.history.push({
                predictions: payload.predictions,
                image: payload.image,
            })
        },
        updateImage: (state, {payload}: PayloadAction<Pick<NeiroData, 'currentImage'>>) => {
            state.currentImage = payload.currentImage
        },
    },
})

export const {updateNeiro, updateImage} = neiroState.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNeiro = (state: RootState) => state.neiro

export const sendImageToNeiro = createAsyncThunk(
    'neiro/sendImageToNeiro',
    async (_, {dispatch, getState}) => {
        const state = getState() as RootState
        const res = await sendFileToNeiro(state.neiro.currentImage)
        dispatch(updateNeiro({
            image: state.neiro.currentImage,
            predictions: res.predictions,
        }))
        return res
    },
)

export default neiroState.reducer
