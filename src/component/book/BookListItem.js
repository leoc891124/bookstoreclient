import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import styles from "./BookStyle";
import { Avatar, Paper, Typography } from "@mui/material";

const propTypes = {
    books: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    
    }).isRequired

}


const BookListItem = ({book}) =>{

    const classes = styles();

    return (
        <Box mb={2}>
            <Paper className={classes.bookListItemPaper} elevation={2} >
                <Avatar  sx={{ width: 50, height: 100 }}variant="square">{book.title}</Avatar>
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