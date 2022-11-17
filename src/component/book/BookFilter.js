import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import styles from "./BookStyle";
import {  getBooksByTitle  } from "../../module/book/bookReducer";
import { useDispatch, useSelector  } from "react-redux";


const BookFilter = ()=>{

    const classes = styles();
    
    const dispatch = useDispatch();


    const [searchText, setSearchText] = useState("");

    

    return(
        <Box className={classes.bookFilter}>
            <Paper className={classes.bookFilterPaper}>
                <Typography>Search book by title</Typography>
                <Box>
                <TextField
                    placeholder="Enter book title"
                    id="book-search"
                    label="Enter book title"
                    variant="outlined"
                    value={searchText}
                    onChange={event => setSearchText(event.target.value)}
                />
                </Box>
                <Button onClick={() => dispatch(getBooksByTitle(searchText))}
                variant="contained" color="primary">Search</Button>
            </Paper>
        </Box>
    )


}

export default BookFilter;