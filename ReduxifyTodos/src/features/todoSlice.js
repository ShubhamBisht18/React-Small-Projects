import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state,action)=>{
            state.push({id:nanoid(),text:action.payload})
        },
        removeTodo: (state,action)=>{
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer