"use client";
import { NotifyBellComponent } from "@/components/custom";
import { AuthBox } from "@/components/custom/auth-box";
import { ThemeToggleButton } from "@/components/custom/color-mode";
import Image from "next/image";
import Link from "next/link";
import { BsBellFill } from "react-icons/bs";

export const ClientNavigatorDesktop = () => {
  return (
    <nav
      className="w-screen md:flex flex-row items-center justify-between px-2
    bg-slate-200 bg-opacity-40 hidden "
    >
      <div className="flex flex-row items-center gap-4 p-2">
        <Link
          href="/"
          className="p-2 rounded-full bg-slate-200 bg-opacity-60 shadow-xl"
        >
          <Image src="/logo/logo-crop.png" width={30} height={30} alt="logo" />
        </Link>

        <div className="flex flex-row items-center gap-4">
          <Link href="/content">
            <span className="font-semibold text-sm dark:text-slate-100">
              Bài viết
            </span>
          </Link>

          <Link href="/series">
            <span className="font-semibold text-sm dark:text-slate-100">
              Chuỗi bài viết
            </span>
          </Link>

          <Link href="/author">
            <span className="font-semibold text-sm dark:text-slate-100">
              Tác giả
            </span>
          </Link>

          <Link href="/about-me">
            <span className="font-semibold text-sm dark:text-slate-100">
              Về tôi
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <NotifyBellComponent />
        <ThemeToggleButton />
        <AuthBox />
      </div>
    </nav>
  );
};
