"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { apiCaller } from "@/api";
import { enqueueSnackbar } from "notistack";
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
                  <div className="relative">
                    <Image
                      src={
                        comment.create_by
                          ? comment.create_by.image
                          : "/avatar/test.jpg"
                      }
                      className="rounded-full aspect-square"
                      style={{ objectFit: "cover" }}
                      width={40}
                      height={40}
                      alt="photo"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {comment.create_by
                        ? comment.create_by.name
                        : "Nguyễn Hoàng Lâm"}
                    </span>
                    <span className="text-xs">
                      {comment.create_by ? comment.create_by.email : "Tác giả"}
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
