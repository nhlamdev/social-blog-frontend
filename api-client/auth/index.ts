import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const authApi = {
  sessions(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("sessions/by-member", params);
    return axiosInstance.get(url);
  },
  logout() {
    return axiosInstance.delete("session/logout");
  },
  forceLogout(sessionId: string) {
    return axiosInstance.delete(`session/force/${sessionId}`);
  },
};
