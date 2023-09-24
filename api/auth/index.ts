import { axiosInstance } from "@/helper";

export const authApi = {
  profile() {
    return axiosInstance.get("profile");
  },
  logout() {
    return axiosInstance.delete("logout");
  },
};
