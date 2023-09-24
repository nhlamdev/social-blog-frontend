"use client";
import { ThemeToggleButton } from "@/components/custom/color-mode";
import { apiCaller } from "@/api";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { ActionButtonComponent } from "./action-button";
import { NavInfoBox } from "./infor-box";
import { useEffect } from "react";
import { useAuth } from "@/hook/auth-hook";

export const ClientNavigator = () => {
  const { profile, firstLoading } = useAuth();

  const generatorComponentBox = () => {
    if (firstLoading) {
      return (
        <div>
          <span>loading</span>
        </div>
      );
    } else {
      if (profile) {
        return <NavInfoBox profile={profile} />;
      } else {
        return <ActionButtonComponent />;
      }
    }
  };

  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-2
    bg-slate-200 bg-opacity-40"
    >
      <div className="flex flex-row items-center">
        <Image src="/logo/logo.png" width={60} height={60} alt="logo" />

        <div className="flex flex-row items-center gap-2">
          <Link href="/" className="font-semibold text-sm">
            <span>Trang chủ</span>
          </Link>

          <Link href="/series" className="font-semibold text-sm">
            <span>Chuỗi bài viết</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <ThemeToggleButton />

        {generatorComponentBox()}
      </div>
    </nav>
  );
};
