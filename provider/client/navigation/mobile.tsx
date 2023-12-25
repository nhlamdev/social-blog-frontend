"use client";
import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  AuthBox,
  LanguageButton,
  NotifyBellComponent,
  ThemeToggleButton,
} from "@/components/custom";
import { useState } from "react";

export const ClientNavigatorMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-4 py-2
  bg-slate-200 bg-opacity-40 md:hidden h-full"
    >
      <BiMenu
        className="text-2xl cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <div className="flex flex-row gap-2 h-full items-center justify-center">
        <NotifyBellComponent />
        <LanguageButton />
        <AuthBox />
      </div>

      {open ? (
        <div
          className="fixed left-0 top-0 w-screen h-screen 
          z-30"
        >
          <div
            className="absolute top-0 left-0 right-0 bottom-0 
          bg-slate-600 bg-opacity-60"
            onClick={() => setOpen(false)}
          />
          <div
            className="w-64 flex flex-col gap-8 left-0 top-0 bottom-0 absolute
           bg-slate-400 dark:bg-slate-600 shadow-xl p-4"
          >
            <div className="flex flex-row justify-between items-center">
              <Link
                href="/"
                className="p-3 rounded-full bg-slate-100 bg-opacity-40 shadow-lg"
              >
                <Image
                  src="/static/logo/logo-crop.png"
                  width={30}
                  height={30}
                  alt="logo"
                />
              </Link>
              <AiFillCloseCircle
                className="text-slate-600 dark:text-slate-400 text-2xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="flex flex-col items-center gap-4 flex-1">
              <Link
                href="/content"
                className="font-semibold text-sm w-full px-2 py-1 dark:text-slate-100 text-slate-900
                dark:border-slate-100 border-slate-900"
                style={{ borderBottom: "1px solid" }}
              >
                Bài viết
              </Link>

              <Link
                href="/series"
                className="font-semibold text-sm w-full px-2 py-1 dark:text-slate-100 text-slate-900
                dark:border-slate-100 border-slate-900"
                style={{ borderBottom: "1px solid" }}
              >
                Chuỗi bài viết
              </Link>

              <Link
                href="/about-me"
                className="font-semibold text-sm w-full px-2 py-1 dark:text-slate-100 text-slate-900
                dark:border-slate-100 border-slate-900"
                style={{ borderBottom: "1px solid" }}
              >
                Tác giả
              </Link>

              <Link
                href="/about-me"
                className="font-semibold text-sm w-full px-2 py-1 dark:text-slate-100 text-slate-900
                dark:border-slate-100 border-slate-900"
                style={{ borderBottom: "1px solid" }}
              >
                Về tôi
              </Link>
            </div>

            <div>
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
