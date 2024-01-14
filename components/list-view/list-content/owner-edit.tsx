"use client";
import { useAuth } from "@/hook";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

interface IOwnerEditAction {
  content: any;
}

export const OwnerEditAction = (props: IOwnerEditAction) => {
  const { content } = props;
  const { profile, firstLoading } = useAuth();

  if (firstLoading || !profile?.role?.owner) {
    return <></>;
  }

  return (
    <Link
      href={`/owner/content/${content._id}`}
      className="absolute -top-2 -right-2 bg-slate-200
        p-2 rounded-md shadow-md cursor-pointer"
    >
      <FaEdit className="text-amber-400" />
    </Link>
  );
};
