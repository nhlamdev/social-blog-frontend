"use client";
import {
  AuthBox,
  NotifyBellComponent,
  ThemeToggleButton,
} from "@/components/custom";
import dynamic from "next/dynamic";

import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const LanguageButton = dynamic(
  () => import("@/components/custom").then((mod) => mod.LanguageButton),
  { ssr: false, loading: () => <div>loading</div> }
);
const DesktopNavigationComponent = dynamic(
  () => import("./nav").then((mod) => mod.DesktopNavigationComponent),
  { ssr: false, loading: () => <div>loading</div> }
);

export const ClientHomeHeaderDesktop = () => {
  return (
    <>
      <header className="hidden md:flex flex-row items-center justify-between p-2">
        <div className="p-3 rounded-full bg-slate-100 bg-opacity-40 shadow-lg">
          <Image src="/logo/logo-crop.png" width={40} height={40} alt="logo" />
        </div>
        {/* 
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-semibold dark:text-slate-100 text-slate-900">
            swalog dev
          </h1>
          <span className="text-sm italic dark:text-slate-100 text-slate-900">
            Make your way to the future with passion and perseverance !
          </span>
        </div> */}

        <div className="flex flex-row items-center gap-2">
          <NotifyBellComponent />
          <ThemeToggleButton />
          <LanguageButton />
          <AuthBox />
        </div>
      </header>

      <nav className="px-4 py-2 gap-2 md:flex flex-row items-center hidden ">
        <DesktopNavigationComponent />
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
