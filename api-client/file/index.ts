import { axiosInstance } from "@/helper/call-center/index";
import { IUploadResponse } from "@/interface";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { AxiosResponse } from "axios";
export const fileApi = {
  paginate(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("files", params);
    return axiosInstance.get(url);
  },
  paginateByMemberCreated(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("files/by-created-member", params);
    return axiosInstance.get(url);
  },
  getByPath() {},
  upload(formData: FormData): Promise<AxiosResponse<IUploadResponse[], any>> {
    return axiosInstance.post("files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  remove() {},
};
