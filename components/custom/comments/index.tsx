"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PaginationChangeComponent } from "..";
import { ListCommentComponent } from "./comment-list";
import { apiCaller } from "@/api";
import { enqueueSnackbar } from "notistack";
import { getCountPage } from "@/utils/global-func";

interface CommentsComponentProps {
  contentId: string;
  countComment: number;
}

export const CommentsComponent = (props: CommentsComponentProps) => {
  const [text, setText] = useState("");
  const { contentId, countComment } = props;

  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const createComment = () => {
    apiCaller.commentApi
      .createComment(text, contentId)
      .then(() => {
        setText("");
        apiCaller.commentApi.comments(contentId, params).then((res) => {
          const { data, max } = res.data;
          setComments(data);
          setTotal(max);
          enqueueSnackbar("Tạo mới bình luận thành công", {
            variant: "success",
          });
        });
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

  const params = useMemo(
    () => ({
      skip: ((page - 1) * 5).toString(),
      take: "5",
    }),
    [page]
  );

  const fetchComments = useCallback(() => {
    apiCaller.commentApi.comments(contentId, params).then((res) => {
      const { data, max } = res.data;
      setComments(data);
      setTotal(max);
    });
  }, [contentId, params]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <span className="font-semibold text-lg dark:text-slate-100">
          Bình luận
        </span>
        <span className="flex-xs dark:text-slate-100">{`(${total})`}</span>
      </div>

      <div className="flex flex-col gap-4">
        <ListCommentComponent
          comments={comments}
          refresh={() => fetchComments()}
        />

        {total !== 0 ? (
          <PaginationChangeComponent
            current={page}
            total={getCountPage(total, 5)}
            onchange={(p: number) => {
              if (page !== p) {
                setPage(p);
              }
            }}
          />
        ) : (
          <></>
        )}
      </div>

      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {`${text.length}/200`}
        </label>
        <textarea
          id="first_name"
          rows={4}
          value={text}
          onChange={(e) => {
            const { value } = e.target;

            if (!(value.length > 200)) {
              setText(value);
            }
          }}
          style={{
            wordBreak: "break-all",
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
