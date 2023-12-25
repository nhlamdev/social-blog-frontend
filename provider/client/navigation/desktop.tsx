"use client";
import { LanguageButton, NotifyBellComponent } from "@/components/custom";
import { AuthBox } from "@/components/custom/auth-box";
import { ThemeToggleButton } from "@/components/custom/color-mode";
import { clientNavigation } from "@/constant";
import { useClientTranslate } from "@/language/translate-client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export const ClientNavigatorDesktop = () => {
  const translate = useClientTranslate();
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
          <Image
            src="/static/logo/logo-crop.png"
            width={30}
            height={30}
            alt="logo"
          />
        </Link>
        <div className="flex flex-row items-center gap-4">
          {clientNavigation.map((n) => {
            return (
              <Link href={n.url} key={`client-nav-${n.display}`}>
                <span className="font-semibold text-sm dark:text-slate-100 capitalize">
                  {translate[n.display]}
                </span>
              </Link>
            );
          })}
        </div>
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
