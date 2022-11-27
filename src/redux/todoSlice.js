// https://redux.js.org/tutorials/essentials/part-4-using-data

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'First Todo!' },
    { id: '2', title: 'Second Todo' }
]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoAdded: (state, action) => {
            state.push(action.payload)
        },
        todoDeleted: (state, action) => {
            const { id } = action.payload;
            const existingTodo = state.find(todo => todo.id === id)
            if (existingTodo) {
                state.pop(existingTodo)
            }
        },

        // What if we wanted to generate Todo ID in the Reducer?
        generateTodoIdAndAdd: {
            reducer(state, action) {
                state.push(action.payload);
                // We modify the already dispatched payload and do our logic there
            }, prepare(title) {
                return {
                    payload: {
                        // Generate our UUID here before updating state
                        id: '8',
                        // Generate a Date Object:
                        date: new Date().toISOString(),
                        title
                    }
                }
            }
        }
    }
})

export const { todoAdded, todoDeleted, generateTodoIdAndAdd } = todoSlice.actions

export default todoSlice.reducer;