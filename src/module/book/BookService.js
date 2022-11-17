import axios from "axios";
import baseurl from "../../config";

export const getBookService = () => axios.get(`${baseurl}/api/v1/books`);

export const getBookByTitleService =(title) => axios.get(`${baseurl}/api/v1/books/${title}`);



//export default getBookService;