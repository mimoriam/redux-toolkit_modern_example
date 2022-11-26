import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // To register another reducer in the store, we could do:
        // users: usersReducer,
        // posts: postsReducer
    },
})