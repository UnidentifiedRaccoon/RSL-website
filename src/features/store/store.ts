import {configureStore} from '@reduxjs/toolkit'

import moduleReducer from './content/module'
import lectureReducer from './content/lecture'
import stepReducer from './content/step'
import breedReducer from './pages/breed'
import dictionaryReducer from './pages/dictionary'
import categoryReducer from './content/category'
import searchReducer from './feature/search'
import neiroReducer from './feature/neiro'

export const store = configureStore({
    reducer: {
        dictionaryPage: dictionaryReducer,
        pageBreed: breedReducer,
        module: moduleReducer,
        lecture: lectureReducer,
        step: stepReducer,
        category: categoryReducer,
        search: searchReducer,
        neiro: neiroReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
