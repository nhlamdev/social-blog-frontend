"use client";
import { axiosInstance } from "@/helper";
import { generateURLWithQueryParams } from "@/utils/global-func";

export const categoryApi = {
  async get(params: { [key: string]: string }) {
    const url = generateURLWithQueryParams("category", params);
    return axiosInstance.get(url);
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
  async create(payload: { title: string; summary: string }) {
    return axiosInstance.post("category", payload);
  },
  async update(id: string, payload: { title: string; summary: string }) {
    return axiosInstance.put(`category/${id}`, payload, {
      headers: { "content-type": "multipart/form-data" },
    });
  },
  async remove(id: string) {
    return axiosInstance.delete(`category/${id}`);
  },
};
