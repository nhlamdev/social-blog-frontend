import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const contentApi = {
  all(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("content/owner", params);
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
  remove(id: string) {
    return axiosInstance.delete(`/content/${id}`);
  },
};
