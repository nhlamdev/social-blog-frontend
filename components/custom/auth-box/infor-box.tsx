"use client";
import { useAuth } from "@/hook/auth.hook";
import { IProfile } from "@/interface";
import { useClientTranslate } from "@/language/translate-client";
import { capitalizeFirstLetter } from "@/utils/global-func";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface NavInfoBoxProps {
  profile: IProfile;
}

export const NavInfoBox = (props: NavInfoBoxProps) => {
  const { profile } = props;

  const translate = useClientTranslate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { firstLoading, logout } = useAuth();

  if (firstLoading) {
    return <div>loading...</div>;
  }

  return (
    <div
      className={`relative flex flex-col space-y-2  items-center  -10 min-w-40 justify-between
      ${
        open ? "before:block" : "before:hidden"
      } bg-slate-100 bg-opacity-60 h-full px-2 py-1 rounded-md
      before:fixed before:top-0 before:right-0 before:left-0 before:bottom-0 `}
      ref={ref}
      onClick={() => setOpen(!open)}
    >
      <div
        className="flex flex-row gap-2 items-center cursor-pointer w-full"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs font-semibold select-none">
          {profile.name}
        </span>

        <Image
          src={`/service/${profile.image}`}
          width={40}
          height={30}
          className="w-8 h-8 rounded-full object-cover"
          style={{ border: "1px solid #fff" }}
          alt="photo"
        />
      </div>

      <div
        className="flex flex-col items-center w-fit justify-center absolute bg-slate-100 top-full 
        right-1/2 left-0 rounded-md shadow-md z-20"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: `translateY(${open ? 0 : "20px"})`,
          transition: "all ease .3s",
          width: `${ref.current?.clientWidth}px`,
        }}
      >
        {profile.role.author || profile.role.owner ? (
          <Link
            href={"/owner/content"}
            className="flex flex-row gap-2 items-center px-6 py-2 w-full group
          whitespace-nowrap"
            style={{
              transition: "all ease .3s",
              cursor: "pointer",
            }}
          >
            <span
              className="group-hover:pl-2 text-xs font-semibold whitespace-nowrap"
              style={{ transition: "all ease .3s" }}
            >
              {capitalizeFirstLetter(translate["MY_DASHBOARD"])}
            </span>
          </Link>
        ) : (
          <></>
        )}
        <Link
          href={"/content/bookmark"}
          className="group flex flex-row gap-2 items-center px-6 py-2 w-full 
            whitespace-nowrap"
          style={{
            transition: "all ease .3s",
            cursor: "pointer",
          }}
        >
          <span
            className="group-hover:pl-2 text-xs font-semibold whitespace-nowrap"
            style={{ transition: "all ease .3s" }}
          >
            {capitalizeFirstLetter(translate["MY_SAVED"])}
          </span>
        </Link>
        <div
          className="group flex flex-row gap-2 items-center px-6 py-2 group
          w-full whitespace-nowrap"
          style={{
            transition: "all ease .3s",
            cursor: "pointer",
          }}
          onClick={() => {
            if (!firstLoading) {
              logout();
            }
          }}
        >
          <span
            className="group-hover:pl-2 text-xs font-semibold whitespace-nowrap"
            style={{ transition: "all ease .3s" }}
          >
            {capitalizeFirstLetter(translate["LOGOUT"])}
          </span>
        </div>
      </div>
    </div>
  );
};
