"use client";
import { useAuth } from "@/hook/auth-hook";
import { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";

export const NotifyBellComponent = () => {
  const { firstLoading, profile } = useAuth();

  const [open, setOpen] = useState(false);

  if (firstLoading || !profile) {
    return <></>;
  }

  return (
    <div className="relative justify-center items-center flex">
      <BsBellFill
        className="cursor-pointer text-slate-900 dark:text-slate-200"
        onClick={() => {
          setOpen(true);
        }}
      />

      <div
        className="absolute right-1/2 bottom-1/2 w-5 h-5 rounded-full shadow-lg
        dark:bg-cyan-600 bg-cyan-400 flex items-center justify-center"
      >
        <span className="text-xs text-slate-900 font-semibold select-none">
          1
        </span>
      </div>

      {open ? (
        <div
          className="fixed top-0 left-0 right-0 bottom-0"
          onClick={() => setOpen(false)}
        />
      ) : (
        <></>
      )}

      <div
        className="sm:absolute fixed bg-slate-100 dark:bg-slate-800 invisible select-none  p-4 gap-2
        flex flex-col sm:w-96 max-h-xl overflow-auto shadow-xl md:right-0 sm:rounded-md
        sm:top-[calc(100%+8px)] sm:bottom-auto sm:left-auto sm:-right-40
        top-0 right-0 left-0 bottom-0"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "all ease .3s",
        }}
      >
        <div className="flex flex-row items-center">
          <span
            className="whitespace-nowrap flex-1 text-xl 
          text-slate-900 dark:text-slate-200"
          >
            Thông báo
          </span>

          <IoCloseCircle
            className="text-2xl text-slate-600 dark:text-slate-400 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div
          className="flex flex-col gap-2 sm:max-h-96 overflow-auto
          max-h-full"
          style={{
            scrollSnapType: " y mandatory",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
            return (
              <div
                key={v}
                className="flex flex-row gap-2 cursor-pointer  p-1
                bg-opacity-60 hover:bg-slate-400 dark:bg-opacity-20 rounded-sm"
                style={{
                  scrollSnapAlign: "start",
                  transition: "all ease .3s",
                }}
              >
                <div className="relative w-28 h-14">
                  <Image
                    src="/test.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-sm"
                    alt="photo"
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1 justify-center">
                  <span className="text-sm text-slate-900 dark:text-slate-200 font-semibold">
                    asdasdas
                  </span>
                  <span className="text-xs text-slate-900 dark:text-slate-200 font-light">
                    27/8/2023
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
