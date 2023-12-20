"use client";
import { NotifyBellComponent } from "@/components/custom";
import { AuthBox } from "@/components/custom/auth-box";
import { ThemeToggleButton } from "@/components/custom/color-mode";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const LanguageButton = dynamic(
  () => import("@/components/custom").then((mod) => mod.LanguageButton),
  { ssr: false, loading: () => <div>loading</div> }
);
const ClientNavigationComponent = dynamic(
  () => import("./nav").then((mod) => mod.ClientNavigationComponent),
  { ssr: false, loading: () => <div>loading</div> }
);

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
        <ClientNavigationComponent />
      </div>

      <div className="flex flex-row items-center gap-4">
        <NotifyBellComponent />
        <ThemeToggleButton />
        <LanguageButton />
        <AuthBox />
      </div>
    </nav>
  );
};
