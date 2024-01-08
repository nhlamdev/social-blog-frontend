import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const commonApi = {
  visualize() {
    return axiosInstance.get("common/visualize");
  },

  status() {
    return axiosInstance.get("common/status");
  },

  notifies(payload: { last?: string; take: string }) {
    const url = generateURLWithQueryParams(
      `notification/notifies-by-member`,
      payload
    );

    return axiosInstance.get(url);
  },
  createContact(payload: { title: string; description: string }) {
    return axiosInstance.post("contact/make-contact", payload);
  },
  contacts(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams(`contact/contacts`, params);
    return axiosInstance.get(url);
  },
  removeContact(id: string) {
    return axiosInstance.delete(`contact/contact/${id}`);
  },
  makeSeenAllNotifies() {
    return axiosInstance.patch("notification/notifies-seen-all");
  },
};
