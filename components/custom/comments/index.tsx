"use client";
import { apiCaller } from "@/api";
import { useAuth } from "@/hook/auth.hook";
import { useAppSelector } from "@/hook/redux.hook";
import { getCountPage } from "@/utils/global-func";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PaginationChangeComponent } from "..";
import { ListCommentComponent } from "./comment-list";
import { useClientTranslate } from "@/language/translate-client";

interface CommentsComponentProps {
  contentId: string;
  countComment: number;
}

export const CommentsComponent = (props: CommentsComponentProps) => {
  const [text, setText] = useState("");

  const { firstLoading, profile } = useAuth();

  const useTranslate = useClientTranslate();

  const { contentId, countComment } = props;

  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const params = useMemo(
    () => ({
      skip: ((page - 1) * 5).toString(),
      take: "5",
    }),
    [page]
  );

  const fetchComments = useCallback(async () => {
    try {
      const {
        data: { data, max },
      } = await apiCaller.commentApi.comments(contentId, params);
      setComments(data);
      setTotal(max);
    } catch (error: any) {
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
    } finally {
    }
  }, [contentId, params]);

  const createComment = async () => {
    try {
      await apiCaller.commentApi.createComment(text, contentId);
      setText("");

      enqueueSnackbar("Tạo mới bình luận thành công", {
        variant: "success",
      });

      await fetchComments();
    } catch (error: any) {
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
    }
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <span className="font-semibold text-lg dark:text-slate-100">
          {useTranslate["COMMENTS"]}
        </span>

        <span className="flex-xs dark:text-slate-100">{`(${total})`}</span>
      </div>

      {comments.length === 0 ? (
        <div className="flex flex-col gap-4 items-center justify-center w-full p-6">
          <span className="text-xl font-semibold">
            Hiện Không có bình luận để hiển thị.
          </span>
        </div>
      ) : (
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
      )}
      {!firstLoading && profile?.role_comment ? (
        <>
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
              Gửi
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
