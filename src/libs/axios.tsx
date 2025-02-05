import axios from "axios";
const baseURL = "http://15.164.98.149:8080/v1/";
const instance = axios.create({
  baseURL,
  timeout: 15000,
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
