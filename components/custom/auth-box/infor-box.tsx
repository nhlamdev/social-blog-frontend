"use client";
import { useAuth } from "@/hook/auth-hook";
import { IProfile } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface NavInfoBoxProps {
  profile: IProfile;
}

export const NavInfoBox = (props: NavInfoBoxProps) => {
  const { profile } = props;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { firstLoading, logout } = useAuth();

  return (
    <div
      className={`relative flex flex-col space-y-2  items-center  z-10
      ${
        open ? "before:block" : "before:hidden"
      } bg-slate-100 bg-opacity-60 h-full px-2 py-1 rounded-md
      before:fixed before:top-0 before:right-0 before:left-0 before:bottom-0 `}
      ref={ref}
      onClick={() => setOpen(!open)}
    >
      <div
        className="flex flex-row gap-2 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs font-semibold select-none">
          {profile.name}
        </span>

        <Image
          src={profile?.image}
          width={40}
          height={30}
          className="w-8 h-8 rounded-full object-cover"
          style={{ border: "1px solid #fff" }}
          alt="photo"
        />
      </div>

      <div
        className="flex flex-col items-center w-fit justify-center absolute bg-slate-100 top-full 
        right-1/2 left-0 rounded-md"
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
            className="flex flex-row gap-2 items-center px-6 py-2 w-full 
            whitespace-nowrap"
            style={{
              transition: "all ease .3s",
              cursor: "pointer",
            }}
          >
            <span className="text-xs font-semibold whitespace-nowrap">
              Quản trị nội
            </span>
          </Link>
        ) : (
          <></>
        )}

        <div
          className="flex flex-row gap-2 items-center px-6 py-2 
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
          <span className="text-xs font-semibold whitespace-nowrap">
            Đăng xuất
          </span>
        </div>
      </div>
    </div>
  );
};
