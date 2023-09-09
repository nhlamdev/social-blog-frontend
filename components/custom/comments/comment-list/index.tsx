import Image from "next/image";
import { ChildComment } from "./item";
import { PaginationChangeComponent } from "../..";

interface ListCommentComponentProps {
  comments: any[];
}
export const ListCommentComponent = (props: ListCommentComponentProps) => {
  const { comments } = props;

  return (
    <div className="flex flex-col w-full gap-2">
      {comments.map((comment) => {
        return (
          <ChildComment key={`comment-${comment._id}`} comment={comment} />
        );
      })}
    </div>
  );
};
