"use client";
import { useEffect, useState } from "react";
import { ReplyCommentBox } from "../reply-list";
import { TiDelete } from "react-icons/ti";
import { commentApi } from "@/api/comment";
import { useAuth } from "@/hook/auth-hook";

interface ListCommentComponentProps {
  comments: any[];
  refresh: () => void;
}
export const ListCommentComponent = (props: ListCommentComponentProps) => {
  const { comments, refresh } = props;

  const { profile } = useAuth();

  const [commentShowReply, setCommentShowReply] = useState("");

  useEffect(() => {
    setCommentShowReply("");
  }, [comments]);

  return (
    <div className="flex flex-col w-full gap-2">
      {comments.map((comment) => {
        return (
          <div className="flex flex-col gap-2" key={`comment-${comment._id}`}>
            <div className="flex flex-col gap-1 p-2  bg-slate-200 bg-opacity-40 rounded-md">
              <div className="flex flex-row gap-2">
                <picture>
                  <img
                    src={
                      comment.created_by
                        ? comment.created_by.image
                        : "/avatar/test.jpg"
                    }
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
