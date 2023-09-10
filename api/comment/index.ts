import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const commentApi = {
  comments(contentId: string, params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(
      `/comment/by-content/${contentId}`,
      params
    );
    return axiosInstance.get(url);
  },
  replies(commentId: string, params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(
      `/comment/by-parent/${commentId}`,
      params
    );
    return axiosInstance.get(url);
  },
  createComment(text: string, contentId: string) {
    return axiosInstance.post(`comment/by-content/${contentId}`, {
      text: text,
    });
  },
  createReply(text: string, commentId: string) {
    return axiosInstance.post(`comment/by-parent/${commentId}`, {
      text: text,
    });
  },
};
