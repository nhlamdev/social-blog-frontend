"use client";
import { LANGUAGE } from "@/constant";
import { useAppDispatch } from "@/hook/redux.hook";
import { changeTranslator } from "@/redux/reducers/common";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const LanguageButton = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const l = Cookies.get("locale");
  const locale = l && LANGUAGE.includes(l) ? l : "vi";

  return (
    <div
      className="rounded-sm flex bg-slate-200 shadow-lg w-10 h-6 
    items-center justify-center cursor-pointer"
      onClick={() => {
        const langChange = locale === "vi" ? "en" : "vi";

        const action = changeTranslator({ lang: langChange });
        dispatch(action);

        Cookies.set("locale", locale === "vi" ? "en" : "vi");
        router.refresh();
      }}
    >
      <span
        className="text-sm text-slate-900 font-semibold
        select-none"
      >
        {locale}
      </span>
    </div>
  );
};
