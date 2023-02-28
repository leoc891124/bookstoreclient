import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import styles from "./BookStyle";
import { Avatar, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {  getBooksByTitle, getBooks  } from "../../module/book/bookReducer";


/*const propTypes = {
    books: PropTypes.shape({
        //id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    
    }).isRequired

}*/


const BookListItem = ({book}) =>{

    


    const classes = styles();

    

    return (
              
        //<div>{bookListSearch()}</div>
       
        <Box mb={2} key={book.id}>
            <Paper className={classes.bookListItemPaper} elevation={2} >
                <Avatar sx={{ width: 180, height: 200 }}variant="square">{book.title}</Avatar>
                <Box ml={1} >
                    <Typography >{book.title}</Typography>
                    <Typography >{book.description}</Typography>
                    <Typography >{book.releaseYear}</Typography>
                </Box>  
            </Paper>
        </Box>
        
    )

}

//BookListItem.propTypes = propTypes;
export default BookListItem;