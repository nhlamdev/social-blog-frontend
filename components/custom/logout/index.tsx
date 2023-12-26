"use client";
import { useAuth } from "@/hook/auth.hook";
import { useClientTranslate } from "@/language/translate-client";
import { capitalizeFirstLetter } from "@/utils/global-func";

export const LogoutBtn = () => {
  const translate = useClientTranslate();
  const { firstLoading, logout } = useAuth();
  return (
    <div
      className="text-stone-600 bg-slate-900 px-4 py-2 flex
      rounded-lg cursor-pointer shadow-lg items-center justify-center"
      onClick={() => {
        if (!firstLoading) {
          logout();
        }
      }}
    >
      <span className="text-sm text-slate-200 font-semibold text-center">
        {capitalizeFirstLetter(translate["LOGOUT"])}
      </span>
    </div>
  );
};
