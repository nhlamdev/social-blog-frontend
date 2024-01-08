import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const authApi = {
  allMemberByOwner(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("all-members", params);
    return axiosInstance.get(url);
  },
  updateRole(memberId: string, key: string, value: boolean) {
    return axiosInstance.patch(`change-role/${memberId}`, { key, value });
  },
  updateProle(formData: FormData) {
    return axiosInstance.put("change", formData, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
  updateFollowed(targetAuthor: string) {
    return axiosInstance.patch(`update-follow/${targetAuthor}`);
  },
  session(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("all-session", params);
    return axiosInstance.get(url);
  },
  profile() {
    return axiosInstance.get("member/profile");
  },
  logout() {
    return axiosInstance.delete("logout");
  },
  forceLogout(sessionId: string) {
    return axiosInstance.delete(`logout-target/${sessionId}`);
  },
};
