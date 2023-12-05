import { IProfile } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { navigation_mock } from "./nav.mock";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import {
  LogoutBtn,
  NotifyBellComponent,
  ThemeToggleButton,
} from "@/components/custom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

interface IOwnerNavigationMobile {
  profile: IProfile;
}
export const OwnerNavigationMobile = (props: IOwnerNavigationMobile) => {
  const { profile } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-4 py-2
    bg-slate-200 bg-opacity-40 lg:hidden h-full"
    >
      <BiMenu
        className="text-2xl cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <div className="flex flex-row gap-2 h-full items-center justify-center">
        <NotifyBellComponent />
        <picture>
          <img
            src={`/service/${profile.image}`}
            className="rounded-full w-8 h-8  shadow-lg"
            style={{ border: "2px solid black" }}
            alt="photo"
          />
        </picture>
      </div>

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
          className="h-fit m-1 rounded-md gap-2 bg-slate-200 dark:bg-slate-600 shadow-md p-4 min-w-fit
         shadow-slate-600 dark:shadow-slate-800 block fixed top-0 bottom-0 left-0 z-20"
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

          <div className="p-2 g-2">
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
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
