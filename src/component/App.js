import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";
import Login from "./user/Login";
import {SnackbarProvider} from "notistack"
//import Auth from "./Auth";
import { useSelector } from "react-redux";
import Register from "./user/Register";
//import { useNavigate } from "react-router-dom";
//import {BrowserRouter} from "react-router-dom";

const App = ()=>{
    //const UseNave = useNavigate();
    
    const token = useSelector((state) => state.userredu.token);

    return (
        <SnackbarProvider maxSnack={1} autoHideDuration={2000}>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route exact path="/" element={token ? <BookContainer />: <Navigate to='/login'/> }></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>
            </Layout>
        </Router>
        </SnackbarProvider>
    );
}

export default App;