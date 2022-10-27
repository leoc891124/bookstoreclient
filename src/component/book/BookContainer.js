import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getBooksApi, getBooks } from "../../module/book/bookReducer";
import BookFilter from "./BookFilter";
import styles from "./BookStyle";
import { useEffect } from "react";
import BookList from "./BookList";

const BookContainer = () =>{
   


    const books = useSelector(getBooks);
    const dispatch = useDispatch();
    
    //console.log(books[0].id);
    
    useEffect(()=>{
       
        dispatch(getBooksApi())
        
        
    },[dispatch]);
    
    const classes = styles();
    return(

        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                <BookList books={books}/>
            </Box>
        </Box>
    );
}

export default BookContainer;