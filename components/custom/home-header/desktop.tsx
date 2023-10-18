"use client";
import Image from "next/image";
import { AuthBox } from "@/components/custom";
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
          <h1 className="text-xl font-semibold">swalog dev</h1>
          <span className="text-sm italic">
            Make your way to the future with passion and perseverance !
          </span>
        </div>

        <AuthBox />
      </header>

      <nav
        className="px-4 py-2 gap-4 md:flex flex-row items-center hidden"
        style={{ borderBottom: "1px solid black" }}
      >
        <Link href="/content">
          <span>Bài viết</span>
        </Link>
        <Link href="/series">
          <span>Chuỗi bài viết</span>
        </Link>
        <Link href="/about-me">
          <span>Về tôi</span>
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
            <FiSearch className="text-2xl" />
          </button>
        </form>
      </nav>
    </>
  );
};
