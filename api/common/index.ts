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
      `common/notifies-by-member`,
      payload
    );

    return axiosInstance.get(url);
  },
  createContact(payload: any) {
    return axiosInstance.post("common/make-contact", payload);
  },
  contacts() {
    return axiosInstance.post("common/contacts");
  },
  removeContacts(id: string) {
    return axiosInstance.post(`common/contact/${id}`);
  },
  makeSeenAllNotifies() {
    return axiosInstance.patch("common/notifies-seen-all");
  },
};
