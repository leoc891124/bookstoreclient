import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getBooksApi, getBooks } from "../../module/bookReducer";
import BookFilter from "./BookFilter";
import styles from "./BookStyle";
import { useEffect } from "react";

const BookContainer = () =>{
   


    const books = useSelector(getBooks);
    const dispatch = useDispatch();
    
    console.log(books[0].id);
    
    useEffect(()=>{
       
        dispatch(getBooksApi())
        
        
    },[dispatch]);
    
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