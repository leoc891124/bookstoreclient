import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from "./bookReducer";

const rootReducer = combineReducers({
  bookredu: booksReducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}