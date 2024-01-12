import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const seriesApi = {
  async paginate(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("series", params);
    return axiosInstance.get(url);
  },
  async getByCreateBy(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("series/owner/paginate", params);
    return axiosInstance.get(url);
  },
  async ContentInSeries(
    categoryId: string,
    payload: {
      skip: string;
      take: string;
      search?: string;
      outside: string;
    }
  ) {
    const url = generateURLWithQueryParams(
      `content/by-series/${categoryId}`,
      payload
    );
    return axiosInstance.get(url);
  },
  async create(data: { title: string; description: string }) {
    return axiosInstance.post("series", data);
  },
  async update(id: string, payload: { title: string; description: string }) {
    return axiosInstance.put(`series/${id}`, payload);
  },
  async remove(id: string) {
    return axiosInstance.delete(`series/${id}`);
  },
};
