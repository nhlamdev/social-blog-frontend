import { axiosInstance } from "@/helper";

export const authApi = {
  ownerLogin(payload: { account: string; password: string }) {
    return axiosInstance.post("/owner-login", payload);
  },
  logout() {
    return axiosInstance.delete("/logout");
  },
};
