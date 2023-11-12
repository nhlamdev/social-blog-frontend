"use client";
import Image from "next/image";
import Link from "next/link";
import { BiBookContent } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { ListViewAuthorsItem } from "./item";

interface IListViewAuthors {
  members: any[];
}
export const ListViewAuthors = (props: IListViewAuthors) => {
  const { members } = props;
  return (
    <div className="flex flex-col w-3/5 gap-2">
      {members.map((member: any) => {
        return <ListViewAuthorsItem key={member._id} member={member} />;
      })}
    </div>
  );
};