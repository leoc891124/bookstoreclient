import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getBookService, getBookByTitleService} from "./BookService";

const initialState = {
  book: [],
  status: "init",
  error: null
}

export const getBooksApi = createAsyncThunk('books/getBooks', async () => {
  const response = await getBookService();
  return response.data
  
})

export const getBooksByTitle = createAsyncThunk('books/getBooksTitle', async (title) => {
  const response = await getBookByTitleService(title);
  return response.data
  
})


const bookSlice = createSlice({
  name: 'bookredu',
  initialState : initialState,
  reducers: {
    
  },
    extraReducers(builder) {
      builder
        .addCase(getBooksApi.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getBooksApi.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.book = state.book.concat(action.payload)
        })
        .addCase(getBooksApi.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
        .addCase(getBooksByTitle.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.book = action.payload;
       
        })
        .addCase(getBooksByTitle.pending, (state, action) => {
            state.status = 'loading'
         
        })
        .addDefaultCase((state, action) => {
          state.status = "init"
        })
        
        
    },
  
  })

export const {  } = bookSlice.actions;


export const getBooks = (state) => state.bookredu.book

export default bookSlice.reducer;
