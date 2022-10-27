import axios from "axios";
import baseurl from "../config";

const getBookService = () => axios.get(`${baseurl}/api/v1/books`);

export default getBookService;