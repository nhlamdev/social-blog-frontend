"use client";
import {
  AuthBox,
  NotifyBellComponent,
  ThemeToggleButton,
} from "@/components/custom";

import { LanguageButton } from "@/components/custom";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { clientNavigation } from "@/constant";
import Link from "next/link";
import { useClientTranslate } from "@/language/translate-client";

export const ClientHomeHeaderDesktop = () => {
  const translate = useClientTranslate();
  return (
    <>
      <header className="hidden md:flex flex-row items-center justify-between p-2">
        <div className="p-3 rounded-full bg-slate-100 bg-opacity-40 shadow-lg">
          <Image
            src="/static/logo/logo-crop.png"
            width={40}
            height={40}
            alt="logo"
          />
        </div>

        <div className="flex flex-row items-center gap-2">
          <NotifyBellComponent />
          <ThemeToggleButton />
          <LanguageButton />
          <AuthBox />
        </div>
      </header>

      <nav className="px-4 py-2 gap-2 md:flex flex-row items-center hidden ">
        {clientNavigation.map((nav) => {
          return (
            <Link href={nav.url} key={`client-nav-${nav.display}`}>
              <span className="dark:text-slate-100 text-slate-900 capitalize">
                {translate[nav.display]}
              </span>
            </Link>
          );
        })}
        <form
          action="/content"
          className="select-none flex flex-row items-center justify-end gap-2  flex-1"
        >
          <input
            type="text"
            name="search"
            className="rounded-md text-sm select-none lg:w-2/5 w-3/5"
          />

          <button type="submit">
            <FiSearch className="text-2xl dark:text-slate-100 text-slate-900" />
          </button>
        </form>
      </nav>

      <div
        className="mx-auto w-full 
        dark:bg-slate-100 bg-slate-900 hidden md:flex "
        style={{ height: "1px" }}
      />
    </>
  );
};
