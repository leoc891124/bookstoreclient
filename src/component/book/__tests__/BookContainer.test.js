/**
 * @jest-environment jsdom
 */
import React from "react";
import { renderWithProviders } from "../../../util/testUtil";
import BookContainer  from "../BookContainer";
import BookList from "../BookList";
//import '@testing-library/jest-dom/extend-expect';
import { getBooksApi } from "../../../module/book/bookReducer";
import reducer, {
    initialState,
  } from "../../../module/book/bookReducer";



//jest.mock("../BookList");
//jest.mock("../../../module/book/bookReducer");

describe("BookContainer",()=>{

   /*beforeAll(()=>{
        BookList.mockImplementation(()=><div>mock booklist component</div>)
    })*/

    it("should render without error",() =>{

        
    
        /*const book = {
            
                id: 1, 
                title: 'Test title', 
                description: "test description", 
                releaseYear: 2019, 
            
          }*/
        
          const action = { type: getBooksApi.fulfilled,  
            
            payload: [{
           
                id: 1, 
                title: 'Test title', 
                description: "test description", 
                releaseYear: 2019, 
            
          
            }]};

        const state = reducer(initialState, action);

    /*getBooksApi.mockImplementation(()=>({
        type: getBooksApi.fulfilled.type,
        payload: book
    }))*/
        renderWithProviders(<BookContainer/>,{});
        expect(state).toEqual( {book : [{
            id: 1, 
            title: 'Test title', 
            description: "test description", 
            releaseYear: 2019}],
            status: "succeeded",
            error: null
        
        } );
    });

    it("should render BookContainer with error",()=>{
        const { asFragment} = renderWithProviders(<BookContainer />,{});

        expect(asFragment()).toMatchSnapshot();
    })

});



