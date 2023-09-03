import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const contentApi = {
  all(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/owner", params);
    return axiosInstance.get(url);
  },
  getContentsByCategory(id: string, params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(`content/by-category/${id}`, params);
    return axiosInstance.get(url);
  },

  async getContentsBySeries(id: string, params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(`content/by-series/${id}`, params);

    return axiosInstance.get(url);
  },

  create(data: FormData) {
    return axiosInstance.post("/content", data, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
  update(id: string, data: FormData) {
    return axiosInstance.put(`/content/${id}`, data, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
  updateContentCategory(content: string, category: string) {
    return axiosInstance.patch(
      `/content/update-category/${content}/${category}`
    );
  },
  updateContentSeries(content: string, series: string) {
    return axiosInstance.patch(`/content/update-series/${content}/${series}`);
  },
  remove(id: string) {
    return axiosInstance.delete(`/content/${id}`);
  },
};
