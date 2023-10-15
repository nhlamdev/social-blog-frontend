import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const authApi = {
  allMemberByOwner(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("all-members", params);
    return axiosInstance.get(url);
  },
  updateRole(memberId: string, key: string, value: boolean) {
    return axiosInstance.patch(`/change-role/${memberId}`, { key, value });
  },
  profile() {
    return axiosInstance.get("profile");
  },
  logout() {
    return axiosInstance.delete("logout");
  },
};
