import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import styles from "./BookStyle";
import { Avatar, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {  getBooksByTitle, getBooks  } from "../../module/book/bookReducer";


const propTypes = {
    books: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    
    }).isRequired

}


const BookListItem = ({book}) =>{

    //const bookStatus = useSelector((state) => state.bookredu.status)
    //const error = useSelector((state) => state.bookredu.error)
    //const dispatch = useDispatch();
      


    const classes = styles();

    /*const bookListSearch = () =>{
        
        //console.log(bookStatus + " in bookListSearch")
        console.log(error);
        if (!bookStatus) {
            //
             console.log(error);
             console.log(bookStatus);
            
              return  <strong> No records found with that name</strong>
          
        }

        else {
            console.log("in else");
           return  <Box mb={2}>
            <Paper className={classes.bookListItemPaper} elevation={2} >
                <Avatar  sx={{ width: 180, height: 200 }}variant="square">{book.title}</Avatar>
                
                <Box ml={1}>
                    <Typography >{book.title}</Typography>
                    <Typography >{book.description}</Typography>
                    <Typography >{book.releaseYear}</Typography>
                </Box>   
            </Paper>
        </Box>
        }
           
            
           
        
    }*/

    return (
              
        //<div>{bookListSearch()}</div>
       
        <Box mb={2}>
            <Paper className={classes.bookListItemPaper} elevation={2} >
                <Avatar  sx={{ width: 180, height: 200 }}variant="square">{book.title}</Avatar>
                <Box ml={1}>
                    <Typography >{book.title}</Typography>
                    <Typography >{book.description}</Typography>
                    <Typography >{book.releaseYear}</Typography>
                </Box>  
            </Paper>
        </Box>
        
    )

}

BookListItem.propTypes = propTypes;
export default BookListItem;