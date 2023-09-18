import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:80/service/`,
  timeout: 5000,
  responseType: "json",
  responseEncoding: "utf8",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },

  async (err) => {
    return Promise.reject(err);
  }
);
