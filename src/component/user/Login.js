import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import styles from "./LoginStyle";
import * as Yup from "yup";
import {useFormik}  from "formik";
import { useDispatch, useSelector } from "react-redux";
import {loginApi, logout} from "../../module/user/userReduer"
//import {loginService }from "../../module/user/UserService";
import { useSnackbar} from "notistack";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';
import { Navigate} from "react-router-dom";


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
    //const token = localStorage.getItem('bookstore-token');
    
   const loginStatus = useSelector((state) => state.userredu.status);
   const error = useSelector((state) => state.userredu.error);
   const { enqueueSnackbar} = useSnackbar();


   useEffect(()=>{
    //console.log(loginStatus);
    
    if(loginStatus === "failed"){
        if(error === "Request failed with status code 401") {
            enqueueSnackbar("Username and password wrong!",{
                variant: "error"
            })
        } else {
            enqueueSnackbar(error,{
                variant: "error"
            })
        }
        
        
    } else if(loginStatus === "succeeded" ){
        console.log("in success");
        enqueueSnackbar("Login Success!",{
            variant: "success"
        })

        
        UseNave({ pathname: '/dashboard' });

       //expired token

       //console.log(loginStatus + " test1");
       const decoded = jwt_decode(token.substring(7));
       //console.log(decoded + "Decoded");
       const startDate = moment(decoded.exp);
       const timeEnd = moment(decoded.iat);
       const diff = startDate.diff(timeEnd);
       const diffDuration = moment.duration(diff);
       //console.log(diffDuration.asMilliseconds()*1000);
       //expireToken(diffDuration.asMilliseconds()*1000)

       setTimeout(() =>{
        //console.log("in timmer")
        enqueueSnackbar("token expired, please login again!",{
            variant: "error"
        })
        dispatch(logout());
        UseNave({ pathname: '/login' })
    
    
      }, diffDuration.asMilliseconds()*1000)


    }

   
   },[loginStatus, enqueueSnackbar, dispatch, token, UseNave, error])

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
            //console.log(loginStatus.pending);
                     
          dispatch(loginApi({username, password}));
          //  console.log(token + "login compoment");
          
            //console.log(error + " " + loginStatus + "login compoment");
            //alert(JSON.stringify(values, null, 2));
            
        }
    })

    const handleRegister = (e) => {
        UseNave({ pathname: '/register' })
}

    return (
       <div>
       {
        token ? <Navigate to='/dashboard'/> : (

            <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box className={classes.wrapper}>
                <Paper className={classes.paper}>
                {loginStatus === "loading" && 
        
                        <Box sx={{ display: 'flex' , justifyContent: "center"}}>
                        <CircularProgress />
                    </Box>
     
                }
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
                    <br />
                     <Link component="button" variant="body2" onClick={handleRegister}>Register</Link>
                </Paper>

               

            </Box>

        </form>

        )
       }
       </div>
       
    )
    
}

export default Login;