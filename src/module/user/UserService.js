import axios from "axios";
import baseurl from "../../config";


export const login =(username, password) => axios.post(`${baseurl}/api/v1/login/`,{
    username,
    password
});



//export default getBookService;