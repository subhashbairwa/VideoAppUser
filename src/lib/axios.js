import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://videocallapp-2-4oq5.onrender.com//api",
    withCredentials:true,
});