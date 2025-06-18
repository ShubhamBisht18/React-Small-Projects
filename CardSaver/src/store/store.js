import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../feature/saveCardSlice'

export const store = configureStore({
    reducer: {
        card: cardReducer
    }
})