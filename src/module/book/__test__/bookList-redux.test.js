/**
 * @jest-environment jsdom
 */
 import { getBooksApi } from "../bookReducer";
import reducer, {
    initialState,
  } from "../bookReducer";
  
  const initialStateTest = {
    book: [],
    status: "init",
    error: null
  }

  test("Should return initial state", () => {
    expect(reducer(undefined,{type: undefined})).toEqual(initialStateTest);
  });

  