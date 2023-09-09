"use client";

import { apiCaller } from "@/api";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

interface ReplysComponentProps {
  commentId: string;
}

export const ReplysComponent = (props: ReplysComponentProps) => {
  const { commentId } = props;

  const [text, setText] = useState("");

  const createComment = () => {
    apiCaller.commentApi
      .createReply(text, commentId)
      .then(() => {
        enqueueSnackbar("Tạo mới bình luận thành công", { variant: "success" });
        setText("");
      })
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            enqueueSnackbar(item, { variant: "error" });
          });
        } else {
          enqueueSnackbar(
            error?.response ? error.response.data?.message : error.message,
            { variant: "error" }
          );
        }
      });
  };

  return (
    <div className="flex flex-col pl-10 gap-2">
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          223/11
        </label>
        <textarea
          id="first_name"
          rows={4}
          style={{
            resize: "none",
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => createComment()}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Gui
        </button>
      </div>
    </div>
  );
};
