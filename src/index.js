import React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./component/App";
import {Provider} from "react-redux";
import {setupStore } from "./module/book/book-toolkit";



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore()
//console.log("in index");

root.render(
    <Provider store={store}>
        <App />        
    </Provider>
    

);