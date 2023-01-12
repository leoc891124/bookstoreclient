/**
 * @jest-environment jsdom
 */
 import React from "react";
 import {fireEvent, render} from "@testing-library/react";
 import BookFilter from "../BookFilter";
 import { renderWithProviders } from "../../../util/testUtil";
 import { getBooksByTitle } from "../../../module/book/bookReducer";
 import reducer, {
    initialState,
  } from "../../../module/book/bookReducer";

 //jest.mock("../../../module/book/bookReducer");
 
 describe('Layout',()=>{
    it('should render BookFilter component',()=>{
        const { getByText} = renderWithProviders( <BookFilter/>,{});
        expect(getByText('Search')).toBeInTheDocument
    })


    it('Should fire serchBook action when hit serch button',()=>{
        const { getByText, getByLabelText } = renderWithProviders(<BookFilter />,{});
        
        
          
        const textField = getByLabelText("Enter book title");
        fireEvent.change(textField, {target: {value: "test title"}})

        const searchButton = getByText("Search");
        fireEvent.click(searchButton);

       
       const action = getBooksByTitle.fulfilled('Test title')
       const expectedState = getBooksByTitle.fulfilled = { ...state, book: 'Test title',  status: "succeeded",error: null }
       const state = reducer(initialState, action);
       expect(state).toEqual(expectedState)
    })
})
