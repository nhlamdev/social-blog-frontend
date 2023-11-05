import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/service/`,
  timeout: 5000,
  responseType: "json",
  responseEncoding: "utf8",
  headers: {
    "Content-Type": "application/json",
  },
});

const accessTokenName = process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME;
const refreshTokenName = process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME;

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url === "profile") {
      if (!accessTokenName) {
        return Promise.reject();
      }
      // console.log(1);
      const checkAccess = await Cookies.get(accessTokenName);

      if (!checkAccess) {
        // console.log(2);
        if (!refreshTokenName) {
          return Promise.reject();
        }

        const checkRefresh = Cookies.get(refreshTokenName);

        if (!checkRefresh) {
          return Promise.reject();
        }

        try {
          // console.log(2.5);
          await axios.get("/service/renew-token");
        } catch (error) {
          Cookies.remove(accessTokenName);
          Cookies.remove(refreshTokenName);
          return Promise.reject();
        }
      }
      // return config;
    }

    console.log(4);
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    console.log("response : ", response);
    return response;
  },

  async (err) => {
    console.log("err : ", err);
    if (err.response && err.response?.data) {
    } else {
      return err;
    }
    const { statusCode, message } = err.response?.data as any;

    if (statusCode === 401) {
      if (!refreshTokenName) {
        if (accessTokenName && Cookies.get(accessTokenName)) {
          Cookies.remove(accessTokenName);
        }

        return Promise.reject();
      }

      const checkRefresh = Cookies.get(refreshTokenName);

      if (!checkRefresh) {
        return Promise.reject();
      }

      try {
        await axios.get("/service/renew-token");

        return await axiosInstance(err.config);
      } catch (error) {
        Cookies.remove(refreshTokenName);
        return Promise.reject(err);
      }
    } else {
      return Promise.reject(err);
    }

    // return Promise.reject(err);
  }
);
