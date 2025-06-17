import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUser = createAsyncThunk('user/fetchUser', async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: null,
        loading: null
    },
    reducers: {
        setSelectedUser: (state,action)=>{
            state.selectedUser = action.payload
        },
    },
    extraReducers: builder =>{
            builder
            .addCase(fetchUser.pending, state =>{
                state.loading = true
            })
            .addCase(fetchUser.fulfilled, (state,action) =>{
                state.loading = false
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, state =>{
                state.loading = false
            })
        }

})

export const {setSelectedUser} = usersSlice.actions
export default usersSlice.reducer