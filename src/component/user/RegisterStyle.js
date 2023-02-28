import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles(()=> createStyles({
    wrapper:{
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    },

    paper: {
        display: 'flex',
        flexDirection:'column',
        padding: '20px'
    },

    marginCon: {
        margin: "12px"
    },
    heading: {
        fontSize: 'larger',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        width: '25%',
        margin: '12px auto'
    }
   
}))