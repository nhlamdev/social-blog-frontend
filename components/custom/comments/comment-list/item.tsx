import Image from "next/image";
import { ListCommentComponent } from ".";
import { ReplysComponent } from "../reply-list";
import { useState } from "react";

interface ChildCommentProps {
  comment: any;
}

export const ChildComment = (props: ChildCommentProps) => {
  const { comment } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 p-2  bg-slate-200 bg-opacity-40 rounded-md">
        <div className="flex flex-row gap-2 items-center">
          <div className="relative">
            <Image
              src={
                comment.create_by ? comment.create_by.image : "/avatar/test.jpg"
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
              {comment.create_by ? comment.create_by.name : "Nguyễn Hoàng Lâm"}
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

      {open ? <ReplysComponent commentId={comment._id} /> : <></>}
    </div>
  );
};
