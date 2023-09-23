import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/service/`,
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
    if (err.response && err.response?.data) {
    } else {
      return Promise.reject(err);
    }
    const { statusCode, message } = err.response?.data as any;

    if (statusCode === 401) {
      try {
        await axios.get("/service/renew-token");

        return await axiosInstance(err.config);
      } catch (error) {
        return Promise.reject(err);
      }
    } else {
      return Promise.reject(err);
    }

    // return Promise.reject(err);
  }
);
