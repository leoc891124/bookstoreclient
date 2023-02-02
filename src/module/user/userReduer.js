import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {login} from "./UserService";

const initialState = {
  token: "",
  status: "init",
  error: null
}

export const loginApi = createAsyncThunk('login/postLogin', async (username, password) => {
  const response = await login(username, password);
  return response.data
  
})



const userSlice = createSlice({
  name: 'userredu',
  initialState : initialState,
  reducers: {


    
  },
    extraReducers(builder) {
      builder
        .addCase(login.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(login.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.token = action.payload
        })
        .addCase(login.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
        
        
        
    },
  
  })

export const {  } = userSlice.actions;


export const loginIn = (state) => state.userredu.token

export default userSlice.reducer;