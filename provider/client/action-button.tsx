"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { BsDiscord, BsFacebook, BsGithub } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

export const ActionButtonComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative flex flex-col space-y-2  items-center 
      ${open ? "before:block" : "before:hidden"}
      before:fixed before:top-0 before:right-0 before:left-0 before:bottom-0 `}
      onClick={() => setOpen(!open)}
    >
      <div
        className="flex flex-row items-center gap-4 shadow-lg px-4 py-2
        bg-slate-200 bg-opacity-40 cursor-pointer rounded-md"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs select-none font-semibold">Đăng nhập</span>
        <MdAccountCircle style={{ fontSize: "24px" }} />
      </div>

      <div
        className="flex flex-col items-center w-fit justify-center absolute bg-slate-200 top-full right-1/2"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: `translateY(${open ? 0 : "20px"})`,
          transition: "all ease .3s",
        }}
      >
        <Link
          href="/service/google"
          className="flex flex-row gap-2 items-center px-4 py-2 hover:bg-slate-300 w-full whitespace-nowrap"
          style={{
            transition: "all ease .3s",
          }}
        >
          <BiLogoGoogle
            className="text-xl text-red-600 drop-shadow-xl cursor-pointer 
          hover:drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <span className="text-xs font-semibold whitespace-nowrap">
            Google login
          </span>
        </Link>

        <Link
          href="/service/facebook"
          className="flex flex-row gap-2 items-center px-4 py-2 hover:bg-slate-300 w-full"
          style={{
            transition: "all ease .3s",
          }}
        >
          <BsFacebook
            className="text-xl text-blue-600 drop-shadow-xl cursor-pointer 
          hover:drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          />

          <span className="text-xs font-semibold whitespace-nowrap">
            Facebook login
          </span>
        </Link>

        <Link
          href="/service/discord"
          className="flex flex-row gap-2 items-center px-4 py-2 hover:bg-slate-300 w-full"
          style={{
            transition: "all ease .3s",
          }}
        >
          <BsDiscord
            className="text-xl text-sky-600 drop-shadow-xl cursor-pointer 
          hover:drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          />

          <span className="text-xs font-semibold whitespace-nowrap">
            Discord login
          </span>
        </Link>

        <Link
          href="/service/github"
          className="flex flex-row gap-2 items-center px-4 py-2 hover:bg-slate-300 w-full"
          style={{
            transition: "all ease .3s",
          }}
        >
          <BsGithub
            className="text-xl text-Gray-950 drop-shadow-xl cursor-pointer 
          hover:drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          />

          <span className="text-xs font-semibold whitespace-nowrap">
            Github login
          </span>
        </Link>
      </div>
    </div>
  );
};
