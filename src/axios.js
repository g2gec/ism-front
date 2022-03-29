import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
// http://127.0.0.1:8000/api
// http://167.172.138.14:8081/api
export default instance;
