"use client";
import {
  AuthBox,
  LanguageButton,
  NotifyBellComponent,
} from "@/components/custom";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeToggleButton } from "@/components/custom";
import { clientNavigation } from "@/constant";
import { clientMappingLanguage } from "@/language/translate-client";

export const ClientHomeHeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header
      className="flex flex-row md:hidden items-center justify-between select-none
    bg-slate-800 dark:bg-opacity-80 bg-opacity-20 p-2 shadow-md"
    >
      <GiHamburgerMenu
        className="text-lg cursor-pointer dark:text-slate-100 text-slate-900"
        onClick={() => setOpen(true)}
      />

      <div className="flex flex-row gap-4 items-center">
        <NotifyBellComponent />

        <AuthBox />
      </div>

      {open ? (
        <div className="fixed left-0 top-0 w-screen h-screen z-10">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 
          bg-slate-600 bg-opacity-60"
          />

          <div
            className="w-64 flex flex-col gap-8 left-0 top-0 bottom-0 absolute
            bg-slate-400 dark:bg-slate-600 shadow-xl p-4"
          >
            <div className="flex flex-row justify-between items-center">
              <div className="p-3 rounded-full bg-slate-100 bg-opacity-40 shadow-lg">
                <Image
                  src="/logo/logo-crop.png"
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>

              <AiFillCloseCircle
                className="text-slate-600 dark:text-slate-400 text-2xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <nav className="flex flex-col items-center gap-4 flex-1">
              {clientNavigation.map((nav) => {
                return (
                  <Link
                    href={nav.url}
                    key={`client-nav-${nav.display}`}
                    className="font-semibold text-sm w-full px-2 py-1 dark:text-slate-100 
                    text-slate-900 dark:border-slate-100 border-slate-900
                    capitalize"
                    style={{ borderBottom: "1px solid" }}
                  >
                    {clientMappingLanguage(nav.display)}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-row justify-between px-2">
              <ThemeToggleButton />
              <LanguageButton />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
