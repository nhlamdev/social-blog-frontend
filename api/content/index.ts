import { axiosInstance } from "@/helper";

export const contentApi = {
  create(data: FormData) {
    return axiosInstance.post("/content", data, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
  updateBody(
    id: string,
    payload: {
      title: string;
      body: string;
      tags: string[];
      category: string | null;
      complete: boolean;
    }
  ) {
    return axiosInstance.put(`/content/update-body/${id}`, payload);
  },
  async updateImage(id: string, form: FormData) {
    return axiosInstance.patch(`/content/update-image/${id}`, form, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
};
