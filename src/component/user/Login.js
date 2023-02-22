import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box , spacing} from "@mui/system";
import React, { useEffect } from "react";
import styles from "./LoginStyle";
import * as Yup from "yup";
import {useFormik}  from "formik";
import { useDispatch, useSelector } from "react-redux";
import {loginApi, loginIn} from "../../module/user/userReduer"
//import {loginService }from "../../module/user/UserService";
import { useSnackbar} from "notistack";
import { useNavigate } from "react-router-dom";


const validateSchema = Yup.object({
    
    username: Yup
     .string("Enter you username")
     .email("Enter a valid username")
     .required("Username is required"),
     password: Yup
     .string("Enter you password")
     .min(8, "Password should be a minumoun of 8 characters")
     .required("Password is required")
})

const Login = () =>{
    const classes = styles();
    const dispatch = useDispatch();
    const UseNave = useNavigate();
    
    const token = useSelector((state) => state.userredu.token);
    
   const loginStatus = useSelector((state) => state.userredu.status);
   const error = useSelector((state) => state.userredu.error);
   const { enqueueSnackbar} = useSnackbar();


   useEffect(()=>{
    if(loginStatus === "failed"){
        enqueueSnackbar("Username and password wrong!",{
            variant: "error"
        })
        
    } else if (loginStatus === "succeeded"){
        enqueueSnackbar("Login Success!",{
            variant: "success"
        })
        UseNave({ pathname: '/' })
    }
   },[loginStatus, enqueueSnackbar])

    const formik = useFormik({
        initialValues:{
            username: "",
            password: ""
        },
        validationSchema: validateSchema,
        onSubmit: (values) =>{
         
            const username = values.username;
            const password = values.password;
            //loginService(values.username, values.password);
            console.log(loginStatus.pending);
                     
          dispatch(loginApi({username, password}));
          //  console.log(token + "login compoment");
          
            //console.log(error + " " + loginStatus + "login compoment");
            //alert(JSON.stringify(values, null, 2));
            
        }
    })

    return (
        <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box className={classes.wrapper}>
                <Paper className={classes.paper}>
                    <Typography variant="h4">Book Store Login</Typography>
                    <TextField
                       className={classes.fields}
                        name="username"
                        id="username"
                        data-testid="username-testid"
                        label="Enter username"
                        variant="outlined"
                        placeholder="Enter username"
                        margin="dense" 
                        sx={{ mt: 2 }}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        helperText={formik.touched.username && formik.errors.username}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        
                    />
                    <TextField 
                        type="password"
                        className={classes.fields}
                        name="password"
                        id="password"
                        data-testid="password-testid"
                        label="Enter password"
                        variant="outlined"
                        placeholder="Enter password"
                        margin="dense" 
                        sx={{ mt: 2 }}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <Button 
                        sx={{ mt: 2 }}  
                        type="submit" 
                        variant="contained" 
                        disabled={loginStatus === 'loading' ? true : false}
                    >Login</Button>
                </Paper>
            </Box>

        </form>
    )
    
}

export default Login;