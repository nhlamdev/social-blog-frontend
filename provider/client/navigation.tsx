"use client";
import { ThemeToggleButton } from "@/components/custom/color-mode";
import { apiCaller } from "@/api";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { ActionButtonComponent } from "../../components/custom/auth-box/action-button";
import { NavInfoBox } from "../../components/custom/auth-box/infor-box";
import { useEffect } from "react";
import { useAuth } from "@/hook/auth-hook";
import { AuthBox } from "@/components/custom/auth-box";

export const ClientNavigator = () => {
  const { profile, firstLoading } = useAuth();

  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-2
    bg-slate-200 bg-opacity-40"
    >
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
        </Link>

        <div className="flex flex-row items-center gap-2">
          <Link href="/content" className="font-semibold text-sm">
            <span>Bài viết</span>
          </Link>

          <Link href="/series" className="font-semibold text-sm">
            <span>Chuỗi bài viết</span>
          </Link>

          <Link href="/about-me" className="font-semibold text-sm">
            <span>Về tôi</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <ThemeToggleButton />
        <AuthBox />
      </div>
    </nav>
  );
};
