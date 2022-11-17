/**
 * @jest-environment jsdom
 */
 import React from "react";
 import {render} from "@testing-library/react";
 import BookFilter from "../BookFilter";
 
 describe('Layout',()=>{
    it('should render BookFilter component',()=>{
        const { getByText} = render (
            <BookFilter>
                <div>test component</div>
            </BookFilter>
        );

        expect(getByText('test component')).toBeInTheDocument
    })
})
