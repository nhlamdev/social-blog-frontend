"use client";
import { useEffect, useState } from "react";
import { ReplyCommentBox } from "../reply-list";

interface ListCommentComponentProps {
  comments: any[];
}
export const ListCommentComponent = (props: ListCommentComponentProps) => {
  const { comments } = props;

  const [commentShowReply, setCommentShowReply] = useState("");

  useEffect(() => {
    setCommentShowReply("");
  }, [comments]);

  return (
    <div className="flex flex-col w-full gap-2">
      {comments.map((comment) => {
        return (
          <div className="flex flex-col gap-2" key={`comment-${comment._id}`}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 p-2  bg-slate-200 bg-opacity-40 rounded-md">
                <div className="flex flex-row gap-2 items-center">
                  <picture>
                    <img
                      src={
                        comment.created_by
                          ? comment.created_by.image
                          : "/avatar/test.jpg"
                      }
                      className="rounded-full aspect-square w-10 h-10 object-cover"
                      alt="photo"
                    />
                  </picture>

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {comment.created_by
                        ? comment.created_by.name
                        : "Nguyễn Hoàng Lâm"}
                    </span>
                    <span className="text-xs">
                      {comment.created_by
                        ? comment.created_by.email
                        : "Tác giả"}
                    </span>
                  </div>
                </div>

                <div className="pl-2">
                  <span className="text-sm">{comment.text}</span>
                </div>
              </div>
            </div>

            <ReplyCommentBox
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
