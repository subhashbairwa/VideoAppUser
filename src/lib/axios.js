import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://videoappserver-gj5a.onrender.com/api",
    withCredentials:true,
});
