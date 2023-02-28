import { Button, Paper, TextField, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect }  from "react";
import * as Yup from "yup";
import {useFormik}  from "formik";
import styles from "./RegisterStyle";
import {registerApi} from "../../module/user/userReduer"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar} from "notistack";

const validateSchema = Yup.object({
    
    username: Yup.string().email("Enter a valid username").required("Username is required"),
     password: Yup.string().min(8,"Password should be a minumoun of 8 characters").required("Password is required"),
})

const Register = () => {
    const classes = styles();
    const dispatch = useDispatch();
    const UseNave = useNavigate();
          
    const RegisterStatus = useSelector((state) => state.userredu.status);

    const { enqueueSnackbar} = useSnackbar();

    useEffect(()=>{
        if(RegisterStatus === "failed"){
            enqueueSnackbar("Server error occured!",{
                variant: "error"
            })
            
        } else if (RegisterStatus === "successreg"){
            enqueueSnackbar("User added Successfully!",{
                variant: "success"
            })
            UseNave({ pathname: '/login' })
        }
       },[RegisterStatus, enqueueSnackbar,UseNave ])

    const registerForm = useFormik({
        initialValues:{
            username: "",
            password: ""
        },
        validationSchema: validateSchema,
        onSubmit: (values) =>{
         
           //console.log(values);

           const username = values.username;
            const password = values.password;
            const actualdate = new Date().toJSON();
            //loginService(values.username, values.password);
            //console.log(loginStatus.pending);
                     
          dispatch(registerApi({username, password, actualdate}));
          console.log(RegisterStatus);
            
        }
    })
    
    const handleLogin = (e) => {
        UseNave({ pathname: '/login' })
    }
    return(
        <Box className={classes.wrapper}>
            
            <form autoComplete="off" noValidate onSubmit={registerForm.handleSubmit}>
            <Paper className={classes.paper}>
            <Typography variant="h4">User Registration</Typography>
                <TextField 
                    
                    id="username"
                    name="username"
                    variant="outlined"
                    label="Enter username"
                    sx={{ mt: 2 }}
                    value={registerForm.values.username}
                    onChange={registerForm.handleChange}
                    helperText={registerForm.touched.username && registerForm.errors.username}
                    error={registerForm.touched.username && Boolean(registerForm.errors.username)}
                />
                <TextField 
                    
                    type="password"
                    id="password"
                    name="password"
                    variant="outlined"
                    label="Enter password"
                    sx={{ mt: 2 }}
                    value={registerForm.values.password}
                    onChange={registerForm.handleChange}
                    helperText={registerForm.touched.password && registerForm.errors.password}
                    error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                />
            <Button variant="contained" sx={{ mt: 2 }} type="submit" color="primary">Register</Button>
            <br />
                <Link component="button" variant="body2" onClick={handleLogin}>Login</Link>

            </Paper>
            </form>
        </Box>
        
    ) 
}

export default Register;