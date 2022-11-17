import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import styles from "./BookStyle";
import BookListItem from "./BookListItem";
import { Alert, AlertTitle } from "@mui/material";

const propTypes = {
    books: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    
    }).isRequired

}

const BookList =({books})=>{
    const classes = styles();
    //console.log(books.length);
    return(
        <Box className={classes.bookList} ml={5}>
       { books.length > 0 ? books.map((book)=>( <BookListItem book={book} key={book.id} />)) :
        <Alert severity="info"><AlertTitle>Error</AlertTitle><strong> No records found with that book title</strong></Alert> }
       </Box>
    )

}

BookList.propTypes = propTypes;
export default BookList;