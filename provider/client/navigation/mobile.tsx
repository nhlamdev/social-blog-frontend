"use client";
import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AuthBox } from "@/components/custom";

export const ClientNavigatorMobile = () => {
  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-2
  bg-slate-200 bg-opacity-40 md:hidden "
    >
      <Link href="/">
        <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
      </Link>

      <BiMenu className="text-2xl cursor-pointer" />

      <div
        className="fixed left-0 top-0 w-screen h-screen bg-slate-400 bg-opacity-40"
        style={{ zIndex: 10 }}
      >
        <div
          className="w-52 flex flex-col gap-4 right-0 top-0 bottom-0 bg-slate-100 
        absolute p-2"
        >
          <div className="flex flex-row justify-between items-center">
            <span className="text-sm">swalor dev</span>
            <AiFillCloseCircle className="text-red-500 text-2xl" />
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
          <div>
            <AuthBox />
          </div>
        </div>
      </div>
    </nav>
  );
};
