import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getBookService from "./BookService";

const initialState = {
  book: [],
  status: "init",
  error: null
}

export const getBooksApi = createAsyncThunk('books/getBooks', async () => {
  const response = await getBookService();
  return response.data
  
})


const bookSlice = createSlice({
  name: 'bookredu',
  initialState,
  reducers: {
    booklist: (state, action) => {
      
      state.book = action.payload;

      

      /*const getBookAsync = () => async() => {
        try{
          const books = await getBookService();
          state.book = books.data;
          console.log(books.data);
      } catch(error){
          console.log(error);
      }

    }*/

    },}
    ,
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
        
    },
  
  })

export const { booklist } = bookSlice.actions;

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

export default bookSlice.reducer;
