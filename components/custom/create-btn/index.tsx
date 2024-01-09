"use client";
import { useAuth } from "@/hook/auth.hook";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";

interface ICreateActionButton {
  direct: string;
}

export const CreateActionButton = (props: ICreateActionButton) => {
  const { direct } = props;

  const { profile, firstLoading } = useAuth();

  if (
    !profile ||
    firstLoading ||
    (!profile?.role.author && !profile?.role.owner)
  ) {
    return <></>;
  }

  return (
    <Link
      className="text-slate-800 dark:text-slate-100 block fixed 
      right-8 bottom-8 cursor-pointer"
      href={direct}
    >
      <IoIosCreate className="text-4xl" />
    </Link>
  );
};
