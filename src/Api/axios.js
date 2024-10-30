import axios from "axios";
const instance = axios.create({
  // baseURL: "https://selam-backend-evangadi.onrender.com/api",
  // baseURL: "https://backend-evangadi-wlxy.onrender.com/api",
  baseURL: "https://evanapi.birukjira.com/api",
});
export default instance;
