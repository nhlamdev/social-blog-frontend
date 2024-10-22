"use client";
import { apiCaller } from "@/api-client";
import { formatNumber, getCountPage } from "@/utils/global-func";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { commentApi } from "@/api-client/comment";
import { useAuth } from "@/hook/auth.hook";
import { useClientTranslate } from "@/language/translate-client";
import { PaginationComponent } from "../..";

interface ReplyCommentBoxProps {
  comment: any;
  commentShowReply: string;
  changeCommentShowReply: () => void;
  refresh: () => void;
}

export const ReplyCommentBox = (props: ReplyCommentBoxProps) => {
  const { comment, commentShowReply, changeCommentShowReply, refresh } = props;

  const translate = useClientTranslate();
  const { profile, firstLoading } = useAuth();

  const [replies, setReplies] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [text, setText] = useState("");

  const fetchReplies = useCallback(async () => {
    const {
      data: { comments, count },
    } = await apiCaller.commentApi.replies(comment._id);

    setReplies(comments);
    setTotal(count);
  }, [comment._id]);

  const createReply = useCallback(async () => {
    if (!text) {
      return;
    }

    try {
      await apiCaller.commentApi.createReply(text, comment._id);

      setText("");
      await fetchReplies();
      enqueueSnackbar("Tạo mới bình luận thành công", {
        variant: "success",
      });
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
  }, [comment._id, fetchReplies, text]);

  useEffect(() => {
    apiCaller.commentApi.replies(comment._id).then((res) => {
      const { comments, count } = res.data;
      setReplies(comments);
      setTotal(count);
    });
  }, [comment._id]);

  if (commentShowReply === comment._id) {
    return (
      <>
        <p
          className="font-semibold text-xs p-2 cursor-pointer text-slate-800 dark:text-slate-100"
          onClick={() => changeCommentShowReply()}
        >
          {translate["COLLAPSE"]}
        </p>
        <div className="flex flex-col gap-2 pl-10 w-full">
          {replies.map((reply: any) => {
            const timeCreate = new Date(comment.created_at);

            const timeFormat = `${formatNumber(
              timeCreate.getHours()
            )}:${formatNumber(timeCreate.getMinutes())}:${formatNumber(
              timeCreate.getSeconds()
            )}
              ${formatNumber(timeCreate.getDate())}/${formatNumber(
              timeCreate.getMonth() + 1
            )}/${timeCreate.getFullYear()}`;
            return (
              <div
                key={`reply-${reply._id}`}
                className="flex flex-col gap-2 w-full"
              >
                <div className="flex flex-col gap-1 p-2  bg-slate-200 bg-opacity-40 rounded-md">
                  <div className="flex flex-row gap-2">
                    <picture>
                      <img
                        src={`/service/${reply.created_by.image}`}
                        className="rounded-full aspect-square w-6 h-6 object-cover"
                        alt="photo"
                      />
                    </picture>

                    <div className="flex flex-col  w-full">
                      <div className="flex flex-row items-center">
                        <span
                          className="text-sm font-semibold flex-1
                        text-slate-900 dark:text-slate-100"
                        >
                          {reply.created_by
                            ? reply.created_by.name
                            : "Nguyễn Hoàng Lâm"}
                        </span>

                        {profile && profile._id === reply.created_by._id ? (
                          <TiDelete
                            className="text-rose-600 text-2xl cursor-pointer"
                            onClick={async () => {
                              await commentApi.removeComment(reply._id);
                              await fetchReplies();
                              // refresh();
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </div>

                      <span className="text-xs text-slate-900 dark:text-slate-100">
                        {reply.created_by ? reply.created_by.email : "Tác giả"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2">
                    <span className="text-xs font-semibold dark:text-slate-100 text-slate-900">
                      {translate["CREATED_AT"]} :
                    </span>
                    <span className="text-xs dark:text-slate-100 text-slate-900">
                      {timeFormat}
                    </span>
                  </div>

                  <div className="pl-2">
                    <span className="text-sm text-slate-900 dark:text-slate-100">
                      {reply.text}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {!firstLoading && profile.role.comment ? (
            <div className="flex flex-col gap-2">
              <div className="pl-10">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {`${text.length}/200`}
                </label>
                <textarea
                  id="first_name"
                  rows={3}
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
                  onClick={() => createReply()}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Gui
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  } else {
    return (
      <p
        className="font-semibold text-xs p-2 cursor-pointer"
        onClick={() => {
          changeCommentShowReply();
        }}
      >{`${
        total !== 0 ? `(${total}) ${translate["REPLIES"]} ` : translate["REPLY"]
      }`}</p>
    );
  }
};
