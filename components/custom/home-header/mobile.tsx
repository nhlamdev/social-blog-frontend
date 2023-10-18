"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthBox } from "@/components/custom";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

export const ClientHomeHeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header
      className="flex flex-row md:hidden px-4 py-2 items-center justify-between"
      style={{ borderBottom: "1px solid black" }}
    >
      <GiHamburgerMenu
        className="text-xl cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <AuthBox />

      {open ? (
        <div
          className="fixed left-0 top-0 w-screen h-screen bg-slate-400 bg-opacity-40"
          style={{ zIndex: 10 }}
        >
          <div
            className="w-64 flex flex-col gap-4 left-0 top-0 bottom-0 absolute p-2 
            bg-slate-50"
          >
            <div className="flex flex-row justify-between items-center">
              <Link href="/">
                <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
              </Link>
              <span className="text-sm">swalor dev</span>
              <AiFillCloseCircle
                className="text-red-500 text-2xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <Link
                href="/content"
                className="font-semibold text-sm dark:text-slate-100 bg-slate-200 w-full
              px-2 py-1 rounded-md"
              >
                Bài viết
              </Link>

              <Link
                href="/series"
                className="font-semibold text-sm dark:text-slate-100 bg-slate-200 w-full
              px-2 py-1 rounded-md"
              >
                Chuỗi bài viết
              </Link>

              <Link
                href="/about-me"
                className="font-semibold text-sm dark:text-slate-100 bg-slate-200 w-full
              px-2 py-1 rounded-md"
              >
                Về tôi
              </Link>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
