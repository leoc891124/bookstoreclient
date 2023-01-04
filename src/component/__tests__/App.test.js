/**
 * @jest-environment jsdom
 */
import React from "react";
//import {render} from "@testing-library/react";
import App from "../App";
import {renderWithProviders} from "../../util/testUtil";

describe("App component", ()=>{
    it("should render app with error",()=>{
        const { asFragment} = renderWithProviders(<App />,{});

        expect(asFragment()).toMatchSnapshot();
    })
})