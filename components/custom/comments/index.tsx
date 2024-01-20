"use client";
import { apiCaller } from "@/api-client";
import { useAuth } from "@/hook/auth.hook";
import { useClientTranslate } from "@/language/translate-client";
import { capitalizeFirstLetter, getCountPage } from "@/utils/global-func";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ListCommentComponent } from "./comment-list";
import { PaginationComponent } from "..";

interface CommentsComponentProps {
  contentId: string;
  countComment: number;
  searchParams: { [key: string]: string | undefined };
}

export const CommentsComponent = (props: CommentsComponentProps) => {
  const { contentId, countComment, searchParams } = props;
  const { firstLoading, profile } = useAuth();

  const translate = useClientTranslate();

  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);

  const { comp: page } = searchParams;

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = useMemo(
    () => ({
      skip: (current * 5).toString(),
      take: "5",
    }),
    [current]
  );

  const fetchComments = useCallback(async () => {
    try {
      const {
        data: { comments, count },
      } = await apiCaller.commentApi.comments(contentId, params);
      setComments(comments);
      setTotal(count);
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

  if (firstLoading) {
    return <></>;
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <span className="font-semibold text-lg dark:text-slate-100">
          {translate["COMMENTS"]}
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

          {getCountPage(total, 5) > 1 ? (
            <PaginationComponent
              searchParams={searchParams}
              currentPage={current + 1}
              maxPage={getCountPage(total, 5)}
              queryName="comp"
            />
          ) : (
            <></>
          )}
        </div>
      )}
      {!firstLoading && profile?.role.comment ? (
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
              {capitalizeFirstLetter(translate["SUBMIT"])}
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
