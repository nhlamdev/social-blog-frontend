"use client";
import { useAuth } from "@/hook/auth-hook";
import { BsBellFill } from "react-icons/bs";

export const NotifyBellComponent = () => {
  const { firstLoading, profile } = useAuth();

  if (firstLoading || profile) {
    return <></>;
  }

  return (
    <div className="relative">
      <BsBellFill className="cursor-pointer text-slate-900 dark:text-slate-400" />

      <div
        className="absolute right-1/2 bottom-1/2 w-5 h-5 rounded-full shadow-lg
        dark:bg-cyan-600 bg-cyan-400 flex items-center justify-center"
      >
        <span className="text-xs text-slate-900 font-semibold">1</span>
      </div>
    </div>
  );
};
