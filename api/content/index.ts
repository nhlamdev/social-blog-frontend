import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const contentApi = {
  allWithPublic(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/public", params);
    return axiosInstance.get(url);
  },

  allWithPrivate(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/private", params);
    return axiosInstance.get(url);
  },

  all(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/owner", params);
    return axiosInstance.get(url);
  },
  allBookmarkContent(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/bookmark", params);
    return axiosInstance.get(url);
  },

  allUniqueTags(author?: string) {
    if (author) {
      return axiosInstance.get(`content/tags-by-author?author=${author}`);
    } else {
      return axiosInstance.get(`content/tags-by-author`);
    }
  },
  getContentByIdAndOwner(id: string) {
    return axiosInstance.get(`content/by-id/${id}/owner`);
  },
  getContentsByCategory(id: string, params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(`content/by-category/${id}`, params);
    return axiosInstance.get(url);
  },
  getContentsBySeries(id: string, params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(`content/by-series/${id}`, params);

    return axiosInstance.get(url);
  },
  create(data: any) {
    return axiosInstance.post("/content", data);
  },
  makeBookmarkContent(contentId: string) {
    return axiosInstance.patch(`content/bookmark-content/${contentId}`);
  },
  makeWatch(contentId: string) {
    return axiosInstance.patch(`content/${contentId}/watch`);
  },
  voteAction(contentId: string, voteAction: "up" | "down") {
    return axiosInstance.patch(`content/${contentId}/vote-${voteAction}`);
  },
  update(id: string, data: any) {
    return axiosInstance.put(`content/${id}`, data);
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
