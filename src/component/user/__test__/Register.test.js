/**
 * @jest-environment jsdom
 */
import { fireEvent } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../../util/testUtil";
import Register from "../Register";

describe("Register form",()=>{
    it("Should exist name, email, password field and register btn",()=>{
        const {getByLabelText, getByText} = renderWithProviders(<Register/>, {});

        expect(getByLabelText('Enter username')).toBeInTheDocument;
        expect(getByLabelText('Enter password')).toBeInTheDocument;
        expect(getByText("Register")).toBeInTheDocument;
    })

    it("Should show required error message when register is clicked",async ()=>{
        const {findByText, getByText} = renderWithProviders(<Register/>, {});

        fireEvent.submit(getByText("Register"));

        expect(await findByText("Username is required")).toBeInTheDocument;
        expect(await findByText("Password is required")).toBeInTheDocument;
    })

    it("Should show usernam and password invalid",async ()=>{
        const {findByText, getByText, getByLabelText} = renderWithProviders(<Register/>, {});
        const passwordField = getByLabelText("Enter password");
        const usernameField = getByLabelText("Enter username");

        fireEvent.change(passwordField, {target : {value: "wrongP"}});
        fireEvent.change(usernameField, {target : {value: "username invalid"}});

        const submitBtn =  getByText("Register");
        fireEvent.submit(submitBtn);

        expect(await findByText("Enter a valid username")).toBeInTheDocument;
        expect(await findByText("Password should be a minumoun of 8 characters")).toBeInTheDocument;

    })
})