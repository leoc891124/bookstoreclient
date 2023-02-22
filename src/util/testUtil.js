import React from 'react';
import { render } from '@testing-library/react';
//import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { setupStore } from "../module/store";
//import bookReducer from "../module/book/bookReducer";
import {SnackbarProvider} from "notistack"


export function renderWithProviders(
  ui,
  {
    preloadedState = { },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
      ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(<SnackbarProvider maxSnack={1}>{ui}</SnackbarProvider>, { wrapper: Wrapper, ...renderOptions }) }
}