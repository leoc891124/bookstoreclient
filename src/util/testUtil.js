import React from 'react';
import { render } from '@testing-library/react';
//import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { setupStore } from "../module/book/book-toolkit";
//import bookReducer from "../module/book/bookReducer";


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
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}