import { axiosInstance } from "@/helper/call-center/index";
import { generateURLWithQueryParams } from "@/utils/global-func";
export const fileApi = {
  paginate(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("file", params);
    return axiosInstance.get(url);
  },
  paginateByMemberCreated(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("file/by-created-member", params);
    return axiosInstance.get(url);
  },
  getByPath() {},
  upload(formData: FormData) {
    return axiosInstance.post("file/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  remove() {},
};
