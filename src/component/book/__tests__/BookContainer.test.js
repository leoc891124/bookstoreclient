/**
 * @jest-environment jsdom
 */
import React from "react";
import { renderWithProviders } from "../../../util/testUtil";
import BookContainer  from "../BookContainer";
import BookList from "../BookList";
import '@testing-library/jest-dom';
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

      
          const action = { type: getBooksApi.fulfilled,  
            
            payload: [{
           
                id: 1, 
                title: 'Test title', 
                description: "test description", 
                releaseYear: 2019, 
            
          
            }]};

        const state = reducer(initialState, action);

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


    it("should be pending BookContainer",()=>{
        const { getByTestId } = renderWithProviders(<BookContainer />,{});
             
        expect(getByTestId("book-loading")).toBeInTheDocument();
        
    })

    it("should be faild BookContainer",()=>{
        
        const action = { type: getBooksApi.rejected, error: "undefined"};
        const state = reducer(initialState, action);
       
        renderWithProviders(<BookContainer />,{});
        expect(state).toEqual( { book:[], status: "failed", error: undefined })
            
        
    })
   


});



