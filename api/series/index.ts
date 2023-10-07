import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const seriesApi = {
  async get(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("series", params);
    return axiosInstance.get(url);
  },
  async getByCreateBy(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("series/owner", params);
    return axiosInstance.get(url);
  },
  async create(data: { title: string; summary: string }) {
    return axiosInstance.post("series", data);
  },
  async update(id: string, payload: { title: string; summary: string }) {
    return axiosInstance.put(`series/${id}`, payload);
  },
  async remove(id: string) {
    return axiosInstance.delete(`series/${id}`);
  },
};
