import axios from "axios";

const axiosReq = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export default axiosReq
