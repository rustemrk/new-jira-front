import axios from "axios";

const restHttpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    withCredentials: true,
    headers: {
        accept: 'application/json'
    }
})

export default restHttpClient