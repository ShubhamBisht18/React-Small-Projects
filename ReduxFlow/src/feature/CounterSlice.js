import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action)=>{
            state.value += 1;
        },
        decrement: (state, action)=>{
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = CounterSlice.actions
export default CounterSlice.reducer