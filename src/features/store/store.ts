import { configureStore } from '@reduxjs/toolkit'

import moduleReducer from './content/module'
import lectureReducer from './content/lecture'
import stepReducer from './content/step'
import breedReducer from './pages/breed'

export const store = configureStore({
    reducer: {
        pageBreed: breedReducer,
        module: moduleReducer,
        lecture: lectureReducer,
        step: stepReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
