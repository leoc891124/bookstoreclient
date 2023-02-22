import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles(()=> createStyles({
    wrapper:{
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    },
    paper: {
        display : "flex",
        flexDirection:"column",
        padding: "20px"
    },
   
}))