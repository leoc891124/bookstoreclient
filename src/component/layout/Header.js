import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React  from "react";
import {loginApi, loginIn, logout} from "../../module/user/userReduer"
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar} from "notistack";

const Header = () =>{
    
    const UseNave = useNavigate();
    const token = useSelector((state) => state.userredu.token);
    const dispatch = useDispatch();
    //const token = localStorage.getItem('bookstore-token');
    const { enqueueSnackbar} = useSnackbar();
    
 
    const handleLogout = (e) => {
        enqueueSnackbar("Log off Successfully!",{
            variant: "success"
        })
        dispatch(logout());
        UseNave({ pathname: '/login' })
}

    return(
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" >
                    Book Store
                </Typography>

                { token && <Button 
                    variant="outlined" 
                    color="inherit"     
                    sx={{ textAlign: 'center', marginLeft: 'auto', fontWeight: 'bold'}}
                    onClick={handleLogout}
                    >
                    Log out
                </Button> }

            </Toolbar>

        </AppBar>
    );
}

export default Header;