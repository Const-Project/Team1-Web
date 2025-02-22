import axios from "axios";
const baseURL = "https://juhoec2ddns.ddns.net/v1";
const instance = axios.create({
  baseURL,
  timeout: 3000,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
