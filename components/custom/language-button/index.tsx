"use client";
import { languages } from "@/language/value";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";

interface ILanguageButton {
  isOnlySmallView?: boolean;
}

export const LanguageButton = (props: ILanguageButton) => {
  const { isOnlySmallView } = props;
  const params = useParams();

  const { locale } = params;

  const router = useRouter();

  return (
    <div
      className={`rounded-sm flex bg-slate-200 shadow-lg w-10 h-6 
      items-center justify-center cursor-pointer ${
        isOnlySmallView ? "lg:hidden" : ""
      }`}
      onClick={() => {
        const l = Object.keys(languages).includes(locale.toString())
          ? locale.toString()
          : "vi";

        Cookies.set("locale", l === "en" ? "vi" : "en");
        router.refresh();
      }}
    >
      <span
        className="text-sm text-slate-900 font-semibold
        select-none text-center"
      >
        {locale}
      </span>
    </div>
  );
};
