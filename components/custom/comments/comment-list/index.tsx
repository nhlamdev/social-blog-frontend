import Image from "next/image";
import { ChildComment } from "./item";
import { PaginationChangeComponent } from "../..";

interface ListCommentComponentProps {}
export const ListCommentComponent = (props: ListCommentComponentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col w-full gap-2">
        <ChildComment />
        <ChildComment />
        <ChildComment />
        <ChildComment />
      </div>

      <PaginationChangeComponent
        current={2}
        total={5}
        onchange={function (page: number): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};
