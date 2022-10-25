import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./BookStyle";


const BookFilter = ()=>{

    const classes = styles();

    return(
        <Box className={classes.bookFilter}>
            <Paper className={classes.bookFilterPaper}>
                book filter
            </Paper>
        </Box>
    )


}

export default BookFilter;