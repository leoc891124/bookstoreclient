/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import BookList from '../BookList';
import BookListItem from '../BookListItem';

jest.mock("../BookListItem");


describe ("BookList", () => {

    beforeAll(() => {
        BookListItem.mockImplementation(() => <div>booklistitem comp</div>);
       });
      

    const books = [
       {
        id: 1,
        title: "test title",
        description: "desc",
        releaseYear: 2019,
       },
       {
        id: 2,
        title: "test title2",
        description: "desc2",
        releaseYear: 2020,
       },
    ];

    it("render booklist without error", () => {
        render(<BookList books={books} />);
        expect(BookListItem).toHaveBeenCalledTimes(2);
        expect(BookListItem).toHaveBeenCalledWith({ book: books[0] }, {});
        expect(BookListItem).toHaveBeenCalledWith({ book: books[1] }, {});
       });
       
 });
 