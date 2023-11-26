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
      className="flex flex-row md:hidden px-4 py-2 items-center justify-between"
      style={{ borderBottom: "1px solid black" }}
    >
      <GiHamburgerMenu
        className="text-xl cursor-pointer dark:text-slate-100 text-slate-900"
        onClick={() => setOpen(true)}
      />

      <div className="flex flex-row gap-4 items-center">
        <NotifyBellComponent />
        <AuthBox />
      </div>

      {open ? (
        <div
          className="fixed left-0 top-0 w-screen h-screen bg-slate-600 bg-opacity-40"
          style={{ zIndex: 10 }}
        >
          <div
            className="w-64 flex flex-col gap-4 left-0 top-0 bottom-0 absolute p-2 
            bg-slate-50 bg-gradient-light dark:bg-gradient-dark"
          >
            <div className="flex flex-row justify-between items-center">
              <Link href="/">
                <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
              </Link>
              <span className="text-md dark:text-slate-100 text-slate-900">
                swalor dev
              </span>
              <AiFillCloseCircle
                className="text-red-500 text-2xl cursor-pointer"
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

            <div className="absolute bottom-2 left-2">
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
