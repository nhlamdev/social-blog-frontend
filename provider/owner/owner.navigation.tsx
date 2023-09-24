"use client";
import { LogoutBtn, ThemeToggleButton } from "@/components/custom";
import { useAuth } from "@/hook/auth-hook";
import Link from "next/link";
import { redirect } from "next/navigation";
import { navigation_mock } from "./nav.mock";

export const OwnerNavigation = () => {
  const { firstLoading, profile } = useAuth();

  if (firstLoading) {
    return <div>loading</div>;
  }

  if (!profile || profile.role === "member") {
    redirect("/");
  }

  return (
    <nav
      className="h-fit m-1 rounded-md gap-2 bg-slate-200 shadow-md
  bg-opacity-40 p-4 min-w-fit shadow-slate-600 dark:shadow-slate-800"
    >
      <div className="px-2 py-1 flex flex-col justify-center">
        <span className="dark:text-slate-100 text-slate-800 font-semibold">
          Trang quản lý
        </span>
      </div>

      <div className="p-2 g-2">
        {navigation_mock.map((item, key) => {
          return (
            <Link
              href={item.url}
              key={`item-navigation-${key}`}
              className="group px-10 py-4  hover:bg-slate-400
              duration-300 transition-all ease-in-out rounded-md
              font-medium text-sm gap-2"
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <item.icon className="dark:text-slate-100 text-slate-800 group-hover:transition-transform scale-125 -translate-x-2" />
              <span className="dark:text-slate-100 text-slate-800">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-row">
        <picture>
          <img src={`/service/${profile.image}`} alt="" />
        </picture>

        <span>{profile.name}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ThemeToggleButton />

        <LogoutBtn />
      </div>
    </nav>
  );
};
