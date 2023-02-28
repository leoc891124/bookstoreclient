import axios from "axios";
//import { apiCall } from "react-fetch-wrapper";
import baseurl from "../../config";





export const loginService =(payload) =>  axios.post(`${baseurl}/api/v1/login`, payload   ) ;

export const registerService =(payload) =>  axios.post(`${baseurl}/api/v1/register`, payload   ) ;


