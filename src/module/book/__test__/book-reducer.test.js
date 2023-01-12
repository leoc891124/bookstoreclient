/**
 * @jest-environment jsdom
 */
 import { getBooksApi, getBooksByTitle } from "../bookReducer";
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

      it("should be loading fech when book pending",()=>{
        
        const action = { type: getBooksApi.pending };
        const state = reducer(initialState, action);
              
        expect(state).toEqual( { book:[], status: "loading", error: null })
            
        
    })

  
      it("should be failed fech when book is failed",()=>{
        
        const action = { type: getBooksApi.rejected, error: "undefined"};
        const state = reducer(initialState, action);
              
        expect(state).toEqual( { book:[], status: "failed", error: undefined })
     
    })

    it('set the bookTitle when fetchList is fulfilled', () => {

      
        //const initialState: HomeState = { ...state, query: '' }
        const action = getBooksByTitle.fulfilled('Test title')
        const expectedState = getBooksByTitle.fulfilled = { ...state, book: 'Test title',  status: "succeeded",error: null }
        const state = reducer(initialState, action);
        expect(state).toEqual(expectedState)
      

      //const action = { type: getBooksByTitle.fulfilled, 'Test title' };

      
      //expect(state).toEqual( title = 'Test title');

      //const action = getBooksByTitle('test');

      /*const action = { type: getBooksByTitle.fulfilled("Test title"),  
            
        /*payload: [{
       
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
    
    } );*/


    });

    });
  
  });