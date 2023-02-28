import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getBooksApi, getBooks } from "../../module/book/bookReducer";
import BookFilter from "./BookFilter";
import styles from "./BookStyle";
import { useEffect } from "react";
import BookList from "./BookList";
import { Alert, Skeleton, AlertTitle } from "@mui/material";

const BookContainer = () =>{
   


    const dispatch = useDispatch();
    const books = useSelector(getBooks);
    
    const bookStatus = useSelector((state) => state.bookredu.status)
   const error = useSelector((state) => state.bookredu.error)
    
    //console.log(books[0].id);
    
    //console.log(bookStatus);
        //console.log(error);

    useEffect(()=>{
       
        dispatch(getBooksApi())
        
        
        
        
    },[dispatch]);
    
    const classes = styles();
    return(

        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                {bookStatus === "loading" && (
                <Box ml={5}>
                <Skeleton 
                    variant="rect"
                    animation="pulse"
                    width="80%"
                    height={200}
                    data-testid="book-loading"

                />
            </Box>)}
            
            {bookStatus === "failed" && <Alert severity="error"><AlertTitle data-testid="book-error-message">Error</AlertTitle>{error} <strong> check it out!</strong></Alert>}
            
                 
         {bookStatus === "succeeded" && <BookList books={books} key={books.id}/>}

                
            </Box>
        </Box>
    );
}

export default BookContainer;