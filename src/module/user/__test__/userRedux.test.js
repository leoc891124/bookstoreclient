/**
 * @jest-environment jsdom
 */
import { loginApi } from "../userReduer";
import reducer, {
    initialState,
  } from "../userReduer";

  describe('userRedux', () => {
    describe('reducers', () => {

 
      it('Login succesfully', () => {
        const action = { type: loginApi.fulfilled,  
            
             
                token: undefined
   
            };

        const state = reducer(initialState, action);
        expect(state).toEqual({ 
            token: undefined,
            status: "succeeded",
            error: null
        
      });
      });


  
      it("Login failed",()=>{
        
        const action = { type: loginApi.rejected, error: "undefined"};
        const state = reducer(initialState, action);
              
        expect(state).toEqual( { token:null, status: "failed", error: undefined })
     
    })

    

    });

  
  
  });