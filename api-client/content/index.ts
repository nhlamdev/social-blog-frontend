import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const contentApi = {
  public(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/public", params);
    return axiosInstance.get(url);
  },

  myBookmark(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/bookmark", params);
    return axiosInstance.get(url);
  },
  privateWithCreateBy(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/private", params);
    return axiosInstance.get(url);
  },
  privateById(id: string) {
    return axiosInstance.get(`content/private/by-id/${id}`);
  },
  allUniqueTags(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/tags-and-count", params);

    return axiosInstance.get(url);
  },
  voteUp(content: string) {
    return axiosInstance.patch(`content/${content}/vote-up`);
  },
  voteDown(content: string) {
    return axiosInstance.patch(`content/${content}/vote-down`);
  },
  bookmark(content: string) {
    return axiosInstance.patch(`content/${content}/vote-down`);
  },
  watch(content: string) {
    return axiosInstance.patch(`content/${content}/watch`);
  },
  update(id: string, data: any) {
    return axiosInstance.put(`content/${id}`, data);
  },
  updateContentCategory(content: string, category: string) {
    return axiosInstance.patch(
      `/content/${content}/change-category/${category}`
    );
  },
  updateContentSeries(content: string, series: string) {
    return axiosInstance.patch(`/content/${content}/change-series/${series}`);
  },
  create(data: any) {
    return axiosInstance.post("/content", data);
  },
  remove(id: string) {
    return axiosInstance.delete(`/content/${id}`);
  },
};
