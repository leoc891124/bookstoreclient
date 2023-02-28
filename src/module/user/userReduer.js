import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {loginService, registerService} from "./UserService";
import { useNavigate } from "react-router-dom";


const initialState = {
  token: null,
  status: "init",
  error: null
}



export const loginApi = createAsyncThunk('login/loginIn', async (payload) => {
 
  const response = await loginService(payload);
  localStorage.setItem('bookstore-token', response.data.token);

  

  console.log(response);
  return response.data;

  
})

export const registerApi = createAsyncThunk('login/register', async (payload) => {
  
  const response = await registerService(payload);
  console.log(response);
  return response.data;

  
})



const userSlice = createSlice({
  name: 'userredu',
  initialState : initialState,
  reducers: { 
    logout: (state, action) => {
      console.log("in reducer logout")
      localStorage.removeItem("bookstore-token");
      state.token = null
      state.status = "init"

      
    }
   },
    extraReducers(builder) {
      builder
        .addCase(loginApi.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(loginApi.fulfilled, (state, action) => {
          state.status = 'succeeded'
         
          state.token = action.payload.token
          
      
        })
        .addCase(loginApi.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message

        })
        .addCase(registerApi.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(registerApi.fulfilled, (state, action) => {
          state.status = 'successreg'
          //state.user.push(action.payload);
                    
        })
        .addCase(registerApi.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
       
        
        
    },
  
  })

export const { logout } = userSlice.actions;


export const loginIn = (state) => state.userredu

//export const loginIn = (state) => state.userredu

export default userSlice.reducer;