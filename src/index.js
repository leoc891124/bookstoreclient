import React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./component/App";
import {Provider} from "react-redux";
import {setupStore } from "./module/store";
import axios from "axios";
import jwt_decode from "jwt-decode";



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore()


axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('bookstore-token');
        
        //const decoded = jwt_decode(token.substring(7));
        //console.log(decoded.exp) && decoded.exp > Date.now();
        if(token != null ){
            config.headers.Authorization = token;
        } 
        //console.log(token +" index");
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
)

root.render(
    <Provider store={store}>
         <App />
    </Provider>
    

);