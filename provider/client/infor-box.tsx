"use client";
import { apiCaller } from "@/api";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { IProfile } from "@/interface";

interface NavInfoBoxProps {
  profile: IProfile;
}

export const NavInfoBox = (props: NavInfoBoxProps) => {
  const { profile } = props;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  return (
    <div
      className={`relative flex flex-col space-y-2  items-center  z-10
      ${open ? "before:block" : "before:hidden"}
      before:fixed before:top-0 before:right-0 before:left-0 before:bottom-0 `}
      ref={ref}
      onClick={() => setOpen(!open)}
    >
      <div
        className="flex flex-row gap-2 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold select-none">
          {profile.name}
        </span>

        <Image
          src={profile?.image}
          width={40}
          height={30}
          className="w-10 h-10 rounded-full object-cover"
          style={{ border: "1px solid #fff" }}
          alt="photo"
        />
      </div>

      <div
        className="flex flex-col items-center w-fit justify-center absolute bg-slate-200 top-full right-1/2"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: `translateY(${open ? 0 : "20px"})`,
          transition: "all ease .3s",
          width: `${ref.current?.clientWidth}px`,
          left: 0,
        }}
      >
        {profile.role !== "member" ? (
          <div
            className="flex flex-row gap-2 items-center px-6 py-2 hover:bg-slate-300 w-full whitespace-nowrap"
            style={{
              transition: "all ease .3s",
              cursor: "pointer",
            }}
          >
            <span className="text-xs font-semibold whitespace-nowrap">
              Quản trị nội dung
            </span>
          </div>
        ) : (
          <></>
        )}

        <div
          className="flex flex-row gap-2 items-center px-6 py-2 hover:bg-slate-300 w-full whitespace-nowrap"
          style={{
            transition: "all ease .3s",
            cursor: "pointer",
          }}
          onClick={() => {
            apiCaller.authApi.logout().then((res) => {
              router.refresh();
            });
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
