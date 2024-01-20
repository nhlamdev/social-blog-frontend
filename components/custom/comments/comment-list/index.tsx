"use client";
import { useEffect, useState } from "react";
import { ReplyCommentBox } from "../reply-list";
import { TiDelete } from "react-icons/ti";
import { commentApi } from "@/api-client/comment";
import { useAuth } from "@/hook/auth.hook";
import { useClientTranslate } from "@/language/translate-client";
import { formatNumber } from "@/utils/global-func";

interface ListCommentComponentProps {
  comments: any[];
  refresh: () => void;
}
export const ListCommentComponent = (props: ListCommentComponentProps) => {
  const { comments, refresh } = props;

  const { profile } = useAuth();

  const [commentShowReply, setCommentShowReply] = useState("");
  const translate = useClientTranslate();

  useEffect(() => {
    setCommentShowReply("");
  }, [comments]);

  return (
    <div className="flex flex-col w-full gap-2">
      {comments.map((comment) => {
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
          <div className="flex flex-col gap-2" key={`comment-${comment._id}`}>
            <div className="flex flex-col gap-1 p-2  bg-slate-200 bg-opacity-40 rounded-md">
              <div className="flex flex-row gap-2">
                <picture>
                  <img
                    src={`/service/${comment.created_by.image}`}
                    className="rounded-full aspect-square w-6 h-6 object-cover"
                    alt="photo"
                  />
                </picture>

                <div className="flex flex-col w-full">
                  <div className="flex flex-row items-center">
                    <span className="text-sm font-semibold flex-1 dark:text-slate-100">
                      {comment.created_by
                        ? comment.created_by.name
                        : "Nguyễn Hoàng Lâm"}
                    </span>

                    {profile && profile._id === comment.created_by._id ? (
                      <TiDelete
                        className="text-rose-600 text-2xl cursor-pointer"
                        onClick={async () => {
                          await commentApi.removeComment(comment._id);
                          refresh();
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <span className="text-xs dark:text-slate-100">
                    {comment.created_by ? comment.created_by.email : "Tác giả"}
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
                <span className="text-sm dark:text-slate-100">
                  {comment.text}
                </span>
              </div>
            </div>

            <ReplyCommentBox
              refresh={() => refresh()}
              comment={comment}
              commentShowReply={commentShowReply}
              changeCommentShowReply={() => {
                if (comment._id === commentShowReply) {
                  setCommentShowReply("");
                } else {
                  setCommentShowReply(comment._id);
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
