import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from "./book/bookReducer";
import loginReducer from "./user/userReduer";

const rootReducer = combineReducers({
  bookredu: booksReducer,
  userredu: loginReducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

