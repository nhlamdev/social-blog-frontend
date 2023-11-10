"use client";
import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AuthBox, ThemeToggleButton } from "@/components/custom";
import { useState } from "react";

export const ClientNavigatorMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-4 py-2
  bg-slate-200 bg-opacity-40 md:hidden "
    >
      <BiMenu
        className="text-2xl cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <div>
        <AuthBox />
      </div>

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

            <div className="flex flex-col items-center gap-4 ">
              <Link
                href="/content"
                className="font-semibold text-sm w-full px-2 py-1 "
                style={{ borderBottom: "1px solid black" }}
              >
                Bài viết
              </Link>

              <Link
                href="/series"
                className="font-semibold text-sm w-full px-2 py-1 "
                style={{ borderBottom: "1px solid black" }}
              >
                Chuỗi bài viết
              </Link>

              <Link
                href="/author"
                className="font-semibold text-sm w-full px-2 py-1 "
                style={{ borderBottom: "1px solid black" }}
              >
                Tác giả
              </Link>

              <Link
                href="/about-me"
                className="font-semibold text-sm w-full px-2 py-1 "
                style={{ borderBottom: "1px solid black" }}
              >
                Về tôi
              </Link>
            </div>

            <div className="flex-1" />
            <ThemeToggleButton />
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
