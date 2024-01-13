import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { IMemberUpdatePayload, IMemberChangeRole } from "./interface";

export const memberApi = {
  profile() {
    return axiosInstance.get("member/profile");
  },
  members(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("member", params);
    return axiosInstance.get(url);
  },
  follow(author: string) {
    return axiosInstance.patch(`member/change-follow/${author}`);
  },
  update(payload: IMemberUpdatePayload) {
    return axiosInstance.put("member/update", payload);
  },
  changeRole(id: string, payload: IMemberChangeRole) {
    return axiosInstance.patch(`member/change-role/${id}`, payload);
  },
};
