"use client";
import { commonApi } from "@/api/common";
import { useAuth } from "@/hook/auth.hook";
import { INotify } from "@/interface";
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

export const NotifyBellComponent = () => {
  const { firstLoading, profile } = useAuth();

  const [open, setOpen] = useState(false);
  const [notifies, setNotifies] = useState<INotify[]>([]);
  const [unSeen, setUnSeen] = useState<number>(0);

  const fetchNotifies = useCallback(async () => {
    try {
      const {
        data: { notifies, unSeen },
      } = await commonApi.notifies({ take: "10" });
      setNotifies(notifies);
      setUnSeen(unSeen);
    } catch (error: any) {
      if (Array.isArray(error?.response?.data?.message)) {
        error?.response?.data?.message.forEach((item: any) => {
          enqueueSnackbar(item, { variant: "error" });
        });
      } else {
        enqueueSnackbar(
          error?.response ? error.response.data?.message : error.message,
          { variant: "error" }
        );
      }
    }
  }, []);

  useEffect(() => {
    fetchNotifies();
  }, [fetchNotifies]);

  if (firstLoading || !profile) {
    return <></>;
  }

  return (
    <div className="relative justify-center items-center flex">
      <BsBellFill
        className="cursor-pointer text-slate-900 dark:text-slate-200"
        onClick={() => {
          if (unSeen !== 0) {
            commonApi.makeSeenAllNotifies();
          }

          setOpen(true);
        }}
      />

      {unSeen !== 0 ? (
        <div
          className="absolute right-1/2 bottom-1/2 w-6 h-6 rounded-full shadow-lg
        dark:bg-cyan-600 bg-cyan-400 flex items-center justify-center"
        >
          <span className="text-xs text-slate-900 font-semibold select-none">
            {unSeen > 10 ? "10+" : unSeen}
          </span>
        </div>
      ) : (
        <></>
      )}

      {open ? (
        <div
          className="fixed top-0 left-0 right-0 bottom-0"
          onClick={() => setOpen(false)}
        />
      ) : (
        <></>
      )}

      {open ? (
        <div
          className="sm:absolute fixed bg-slate-100 dark:bg-slate-800 invisible select-none  p-4 gap-2
        flex flex-col sm:w-96 max-h-xl overflow-auto shadow-xl md:right-0 sm:rounded-md
        sm:top-[calc(100%+8px)] sm:bottom-auto sm:left-auto sm:-right-40 z-20 
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

          <div className="w-5/6 h-[2px] bg-slate-900 dark:bg-slate-200 mx-auto my-2 sm:my-1" />

          <div
            className="flex flex-col gap-2 sm:max-h-96 overflow-auto
          max-h-full sm:min-h-[24rem]"
            style={{
              scrollSnapType: " y mandatory",
            }}
          >
            {notifies.length === 0 ? (
              <span className="mx-auto">Hiện chưa có thông báo!</span>
            ) : (
              notifies.map((v) => {
                const date = new Date(v.created_at);
                const timeFormat = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`;
                return (
                  <div
                    key={v._id}
                    className="flex flex-row gap-2 cursor-pointer  p-1 items-center
                bg-opacity-60 hover:bg-slate-200 dark:bg-opacity-20 rounded-sm"
                    style={{
                      scrollSnapAlign: "start",
                      transition: "all ease .3s",
                    }}
                  >
                    <div className="relative w-14 h-14">
                      <Image
                        src={`/service/${v.from.image}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="shadow-md rounded-full"
                        alt="photo"
                      />

                      {!v.seen ? (
                        <div
                          className="bg-cyan-600 w-2 h-2 rounded-full absolute
                    right-1 bottom-1 animate-pulse"
                          style={{ border: "1px solid white" }}
                        />
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 flex-1 justify-center">
                      <span className="text-sm text-slate-900 dark:text-slate-200 font-semibold">
                        {v.title}
                      </span>
                      <span className="text-xs text-slate-900 dark:text-slate-200 font-light">
                        {v.from.email}
                      </span>
                      <span className="text-xs text-slate-900 dark:text-slate-200 font-light">
                        {timeFormat}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
