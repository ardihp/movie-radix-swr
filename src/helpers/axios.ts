import { HOST_ACCESS_TOKEN, HOST_API } from "@/config-global";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer " + HOST_ACCESS_TOKEN;

export default axiosInstance;

export const endpoints = {
  movie: {
    now_playing: "/movie/now_playing",
  },
};
