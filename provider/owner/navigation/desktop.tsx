"use client";
import { IProfile } from "@/interface";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { navigation_mock } from "./nav.mock";
import {
  LanguageButton,
  LogoutBtn,
  ThemeToggleButton,
} from "@/components/custom";
import { useClientTranslate } from "@/language/translate-client";
import { capitalizeFirstLetter } from "@/utils/global-func";

interface IOwnerNavigationDesktop {
  profile: IProfile;
}

export const OwnerNavigationDesktop = (props: IOwnerNavigationDesktop) => {
  const { profile } = props;
  const translate = useClientTranslate();

  return (
    <nav
      className="h-fit m-1 rounded-md gap-2 bg-slate-200 shadow-md bg-opacity-40 p-4 min-w-fit
         shadow-slate-600 dark:shadow-slate-800 hidden lg:block"
      id="owner-navigation"
    >
      <div className="px-2 py-1 flex flex-row items-center justify-between">
        <Link href="/">
          <BsFillArrowLeftCircleFill
            className="hover:scale-110 text-slate-800 dark:text-slate-100 text-2xl"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <span className="dark:text-slate-100 text-slate-900 font-semibold">
          {capitalizeFirstLetter(translate["DASHBOARD"])}
        </span>

        <picture>
          <img
            src={`/service/${profile.image}`}
            className="rounded-full w-8 h-8  shadow-lg"
            style={{ border: "2px solid black" }}
            alt="photo"
          />
        </picture>
      </div>

      <div className="p-2 g-2">
        {navigation_mock
          .filter((v) => {
            if (profile.role_owner) {
              return true;
            } else {
              return !v.require_owner;
            }
          })
          .map((item, key) => {
            return (
              <Link
                href={item.url}
                key={`item-navigation-d-${key}`}
                className="group px-8 py-3  hover:bg-slate-400
                duration-300 transition-all ease-in-out rounded-md
                font-medium text-sm gap-2 w-52"
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <item.icon className="dark:text-slate-100 text-slate-900 group-hover:transition-transform scale-125 -translate-x-2" />
                <span className="dark:text-slate-100 text-slate-900 font-semibold">
                  {capitalizeFirstLetter(translate[item.key])}
                </span>
              </Link>
            );
          })}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          <ThemeToggleButton />
          <LanguageButton />
        </div>
        <LogoutBtn />
      </div>
    </nav>
  );
};
