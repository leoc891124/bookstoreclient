/**
 * @jest-environment jsdom
 */
 import { getBooksApi } from "../bookReducer";
import reducer, {
    initialState,
  } from "../bookReducer";
  
  
  
  describe('exampleSlice', () => {
    describe('reducers', () => {

        
      
      /*it('sets fetching true when fetchList is pending', () => {
        const action = { type: fetchList.pending.type };
        const state = reducer(initialState, action);
        expect(state).toEqual({ id: '', list: [], fetching: true });
      });*/
  
      it('set the book when fetchList is fulfilled', () => {
        const action = { type: getBooksApi.fulfilled,  
            
            payload: [{
           
                id: 1, 
                title: 'Test title', 
                description: "test description", 
                releaseYear: 2019, 
            
          
            }]};

        const state = reducer(initialState, action);
        expect(state).toEqual( {book : [{
            id: 1, 
            title: 'Test title', 
            description: "test description", 
            releaseYear: 2019}],
            status: "succeeded",
            error: null
        
        } );
      });
  
      /*it('sets fetching false when fetchList is rejected', () => {
          const action = { type: fetchList.rejected.type, payload: { error: 'some error' } };
          const state = reducer(initialState, action);
          expect(state).toEqual({ id: '', list: [], fetching: false });
        });*/
    });
  
  });