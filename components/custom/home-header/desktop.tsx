"use client";
import { AuthBox, ThemeToggleButton } from "@/components/custom";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export const ClientHomeHeaderDesktop = () => {
  return (
    <>
      <header className="md:flex flex-row items-center justify-between hidden">
        <div className="w-16 h-16 relative">
          <Image
            className="shadow-md rounded-full"
            src="/logo/logo.png"
            fill
            alt="logo"
          />
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-semibold dark:text-slate-100 text-slate-900">
            swalog dev
          </h1>
          <span className="text-sm italic dark:text-slate-100 text-slate-900">
            Make your way to the future with passion and perseverance !
          </span>
        </div>

        <div className="flex flex-row items-center gap-2">
          <ThemeToggleButton />
          <AuthBox />
        </div>
      </header>

      <nav className="px-4 py-2 gap-4 md:flex flex-row items-center hidden ">
        <Link href="/content">
          <span className="dark:text-slate-100 text-slate-900">Bài viết</span>
        </Link>
        <Link href="/series">
          <span className="dark:text-slate-100 text-slate-900">
            Chuỗi bài viết
          </span>
        </Link>
        <Link href="/author">
          <span className="dark:text-slate-100 text-slate-900">Tác giả</span>
        </Link>
        <Link href="/about-me">
          <span className="dark:text-slate-100 text-slate-900">Về tôi</span>
        </Link>
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
        dark:bg-slate-100 bg-slate-900 "
        style={{ height: "1px" }}
      />
    </>
  );
};
