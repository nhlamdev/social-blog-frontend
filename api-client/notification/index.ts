import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const notificationApi = {
  notifies(payload: { last?: string; take: string }) {
    const url = generateURLWithQueryParams(
      `notification/notifies-by-member`,
      payload
    );

    return axiosInstance.get(url);
  },
  makeSeenAllNotifies() {
    return axiosInstance.patch("notification/notifies-seen-all");
  },
};
