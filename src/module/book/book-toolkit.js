import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from "./bookReducer";
import loginRedu from "../user/user-toolkit";

const rootReducer = combineReducers({
  bookredu: booksReducer,
  userredu: loginRedu
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}