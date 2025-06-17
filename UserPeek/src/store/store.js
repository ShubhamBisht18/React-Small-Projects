import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/usersSlice'

export const store = configureStore({
    reducer:{
         user: userReducer
    }
})