import { configureStore } from '@reduxjs/toolkit';
import booksReducer from "./bookReducer";

export const bookStore = configureStore({
  reducer: {
    bookredu: booksReducer
  },
});