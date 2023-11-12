"use client";
import { useAuth } from "@/hook/auth-hook";
import { BsBookmarksFill } from "react-icons/bs";

export const FollowButton = () => {
  const { firstLoading, profile } = useAuth();

  if (firstLoading || !profile) {
    return <></>;
  }

  return (
    <div
      className="flex flex-row items-center gap-2 cursor-pointer bg-slate-400
    rounded-md hover:shadow-sm px-4 py-2 w-fit bg-opacity-40"
    >
      <BsBookmarksFill />
      <span>Theo dõi</span>
    </div>
  );
};
