import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const commonApi = {
  visualize() {
    return axiosInstance.get("/common/visualize");
  },

  status() {
    return axiosInstance.get("/common/status");
  },

  notifies(payload: { last?: string; take: string }) {
    const url = generateURLWithQueryParams(
      `common/notifies-by-member`,
      payload
    );

    return axiosInstance.get(url);
  },

  makeSeenAllNotifies() {
    return axiosInstance.patch("common/notifies-seen-all");
  },
};
