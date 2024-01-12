"use client";
import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const categoryApi = {
  async paginate(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("category/paginate", params);
    return axiosInstance.get(url);
  },
  async all() {
    return axiosInstance.get("category");
  },
  async ContentInCategory(
    categoryId: string,
    payload: {
      skip: string;
      take: string;
      search: string;
      outside: string;
    }
  ) {
    const url = generateURLWithQueryParams(
      `content/by-category/${categoryId}`,
      payload
    );
    return axiosInstance.get(url);
  },
  async create(payload: { title: string; description: string }) {
    return axiosInstance.post("category", payload);
  },
  async update(id: string, payload: { title: string; description: string }) {
    return axiosInstance.put(`category/${id}`, payload);
  },
  async remove(id: string) {
    return axiosInstance.delete(`category/${id}`);
  },
};
