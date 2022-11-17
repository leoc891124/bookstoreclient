import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getBookService, getBookByTitleService} from "./BookService";

const initialState = {
  book: [],
  status: "init",
  filteredUsers: [],
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
  initialState,
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
          //state.status = 'loading'
          // Add any fetched posts to the array
          state.book = action.payload;
          /*return {
            ...state,
            filteredUsers: action.payload
          }*/
        
        })
        
        
    },
  
  })

export const {  } = bookSlice.actions;

/*export const getBookAsync = () => async(dispatch) => {
  try{
    const books = await getBookService();
    dispatch( booklist(books.data))
    console.log(books.data);
} catch(error){
    console.log(error);
}
}*/

export const getBooks = (state) => state.bookredu.book

/*export const getBookByTitle = (state, bookTitle) => {
  return state.bookredu.book.find((boo) => boo.title  === bookTitle)
  
}*/

export default bookSlice.reducer;
