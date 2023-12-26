"use client";
import { LogoutBtn, ThemeToggleButton } from "@/components/custom";
import { useAuth } from "@/hook/auth.hook";
import { navigation_mock } from "@/provider/owner/navigation/nav.mock";
import Link from "next/link";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const OwnerMobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const { profile } = useAuth();

  return (
    <div className="flex flex-row lg:hidden ">
      <BiMenu
        className="text-3xl cursor-pointer text-slate-900 dark:text-slate-200"
        onClick={() => setOpen(true)}
      />

      {open ? (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 
          bg-slate-600 bg-opacity-60 z-10"
          onClick={() => setOpen(false)}
        />
      ) : (
        <></>
      )}

      {open ? (
        <div
          className="h-auto sm:h-fit  m-0 sm:m-1 gap-2 bg-slate-200 dark:bg-slate-600 
         shadow-slate-600 dark:shadow-slate-800 flex flex-col fixed shadow-md p-4 min-w-fit
         top-0 bottom-0 left-0 right-0 sm:right-auto z-20 sm:rounded-md  rounded-none"
          id="owner-navigation"
        >
          <div className="px-2 py-1 flex flex-row items-center justify-between">
            <Link href="/">
              <BsFillArrowLeftCircleFill
                className="hover:scale-110 text-slate-800 dark:text-slate-100 text-2xl"
                style={{ cursor: "pointer" }}
              />
            </Link>

            <AiFillCloseCircle
              className="text-slate-600 dark:text-slate-400 text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          {profile ? (
            <div className="p-2 g-2 flex-1">
              {navigation_mock
                .filter((v) => {
                  if (profile.role_owner) {
                    return true;
                  } else {
                    return !v.require_owner;
                  }
                })
                .map((item, key) => {
                  return (
                    <Link
                      href={item.url}
                      key={`item-navigation-d-${key}`}
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
                      <item.icon className="dark:text-slate-100 text-slate-900 group-hover:transition-transform scale-125 -translate-x-2" />
                      <span className="dark:text-slate-100 text-slate-900">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
            </div>
          ) : (
            <></>
          )}

          <div className="flex flex-row items-center justify-between">
            <ThemeToggleButton />
            <LogoutBtn />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
