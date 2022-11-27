import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        // To register another reducer in the store, we could do:
        // users: usersReducer,
        // posts: postsReducer
    },
})