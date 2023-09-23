import { axiosInstance } from "@/helper";

export const authApi = {
  profile() {
    return axiosInstance.get("/service/profile");
  },
  logout() {
    return axiosInstance.delete("/logout");
  },
};
