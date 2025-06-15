import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../feature/CounterSlice'

export const Store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})