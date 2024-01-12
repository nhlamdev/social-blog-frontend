import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const contactApi = {
  contacts(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(`contact`, params);
    return axiosInstance.get(url);
  },
  createContact(payload: { title: string; description: string }) {
    return axiosInstance.post("contact", payload);
  },
  removeContact(id: string) {
    return axiosInstance.delete(`contact/${id}`);
  },
};
