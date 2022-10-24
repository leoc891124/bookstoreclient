import React from "react";
import axios from "axios";
import baseUrl from "../config";
import Layout from "./layout/Layout";

const App = ()=>{

    axios(`${baseUrl}/api/v1/books`).then(books =>{
        console.log(books);
    }
        )

    return <Layout>
    <div>My first app</div>
</Layout>
}

export default App;