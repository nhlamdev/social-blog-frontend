"use client";
import { AuthBox, NotifyBellComponent } from "@/components/custom";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeToggleButton } from "@/components/custom";

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
        <ThemeToggleButton />
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
              {/* <span className="text-md dark:text-slate-100 text-slate-900">
                swalor dev
              </span> */}
              <AiFillCloseCircle
                className="text-slate-600 dark:text-slate-400 text-2xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="flex flex-col items-center gap-4 ">
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
