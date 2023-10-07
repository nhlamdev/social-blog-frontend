import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const categoryApi = {
  async get(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("category", params);
    return axiosInstance.get(url);
  },

  async create(formData: FormData) {
    return axiosInstance.post("category", formData, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
  async update(id: string, formData: FormData) {
    return axiosInstance.put(`category/${id}`, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
  async remove(id: string) {
    return axiosInstance.delete(`category/${id}`);
  },
};
