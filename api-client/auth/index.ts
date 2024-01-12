import { axiosInstance } from "@/helper";

export const authApi = {
  logout() {
    return axiosInstance.delete("session/logout");
  },
  forceLogout(sessionId: string) {
    return axiosInstance.delete(`session/force/${sessionId}`);
  },
};
