import { Box } from "@mui/system";
//import { useDispatch, useSelector } from "react-redux";
import React from "react";
//import { booklist } from "../../module/book-react-toolkit/bookReducerToolkit.js"
import BookFilter from "./BookFilter";
import styles from "./BookStyle";
//import { useEffect } from "react";

const BookContainer = () =>{
   
    
    const classes = styles();
    return(

        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                Here is some information of books
            </Box>
        </Box>
    );
}

export default BookContainer;