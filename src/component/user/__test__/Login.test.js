/**
 * @jest-environment jsdom
 */
import { findByText, fireEvent } from "@testing-library/react";
//import react from "react";
import {renderWithProviders} from "../../../util/testUtil";
import Login from "../Login";
import {BrowserRouter} from "react-router-dom";
import {loginApi, loginIn} from "../../../module/user/userReduer"
//import { wait } from "@testing-library/user-event/dist/utils";
import reducer, {
    initialState,
  } from "../../../module/user/userReduer";

//jest.mock("../../../module/user/userReduer");

describe("login test", ()=>{

    it("should show required error message for email and password",async ()=>{
        const {findByText}= renderWithProviders(<BrowserRouter><Login/></BrowserRouter>,{});
        const submitBtn = await findByText("Login");
        fireEvent.submit(submitBtn);

        expect(await findByText("Username is required")).toBeInTheDocument;
        expect(await findByText("Password is required")).toBeInTheDocument;

        //expect(getByText('Login')).toBeInTheDocument
    })

    it("should show username and password invalid error message",async ()=>{
        const {findByText, getByLabelText}= renderWithProviders(<BrowserRouter><Login/></BrowserRouter>,{});

        const passwordField = getByLabelText("Enter password");
        const usernameField = getByLabelText("Enter username");

        fireEvent.change(passwordField, {target : {value: "wrongP"}});
        fireEvent.change(usernameField, {target : {value: "username invalid"}});

        const submitBtn = await findByText("Login");
        fireEvent.submit(submitBtn);

        expect(await findByText("Enter a valid username")).toBeInTheDocument;
        expect(await findByText("Password should be a minumoun of 8 characters")).toBeInTheDocument;

        //expect(getByText('Login')).toBeInTheDocument
    })

   

    it("should call login reducer when email and password are valid",() =>{
       
        

        const action = { type: loginApi.fulfilled,  
            
             
            token: undefined

        };
        const expectedState = loginApi.fulfilled = { ...state, token: undefined,  status: "succeeded",error: null }
        const state = reducer(initialState, action);
        expect(state).toEqual(expectedState)

        
    })


})