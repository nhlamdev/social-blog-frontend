import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const commonApi = {
  visualize() {
    return axiosInstance.get("/common/visualize");
  },

  status() {
    return axiosInstance.get("/common/status");
  },
};
