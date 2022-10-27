import React from "react";
import Proptypes from "prop-types";
import { Box } from "@mui/system";
import styles from "./BookStyle";

const propTypes = {
    books: Proptypes.arrayOf({
        id: Proptypes.string.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired
    }).isRequired

}

const BookList =({books})=>{
    const classes = styles();
    return(
        <Box className={classes.bookList}>
            {books.map((book)=>(
                <div key={book.id}>{book.id}</div>
            ))}
        </Box>
    )

}

BookList.propTypes = propTypes;
export default BookList;