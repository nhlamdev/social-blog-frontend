"use client";
import { useAuth } from "@/hook/auth.hook";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";
import { AvatarControl } from "./avatar";
import { apiCaller } from "@/api-client";
import { mutate } from "swr";

export const ProfileActionComponent = () => {
  const { error, firstLoading, profile } = useAuth();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  if (firstLoading) {
    return <div>loading</div>;
  }

  const upload = async () => {
    const image = imageRef.current?.files;

    if (typeof image !== "string" && image && image[0]) {
      const formData = new FormData();
      formData.append("files", image[0], image[0].name);

      const { data } = await apiCaller.fileApi.upload(formData);
      return data;
    }
    console.log("no upload");
  };

  const submit = async () => {
    if (loading) {
      return;
    }

    if (!nameRef.current) {
      return;
    }

    const name = nameRef.current.value;

    setLoading(true);
    try {
      const images = await upload();

      let payload: {
        name?: string;
        image?: string;
      } = {};

      if (Boolean(name) && name === profile.name) {
        payload.name = name;
      }

      if (images && images.length > 0) {
        payload.image = images[0].fileName;
      }

      if (!payload.image && !payload.name) {
        return;
      }

      await apiCaller.memberApi.update(payload);

      mutate("member/profile");
    } catch {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className=" w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-fit flex flex-col gap-10 items-center justify-center px-10 py-6 
      rounded-lg shadow-lg bg-slate-400 bg-opacity-40"
    >
      <AvatarControl profile={profile} imageRef={imageRef} />

      <div className="flex flex-col gap-4 select-none w-full">
        <input
          ref={nameRef}
          className="px-4 py-2 outline-none border-transparent border-2 border-solid w-full
          rounded-sm select-none bg-slate-200 focus:border-cyan-400 text-sm"
          style={{ transition: ".3s ease all" }}
          placeholder="Nhận tên của bạn"
          defaultValue={profile.name}
        />

        <input
          className="px-4 py-2 outline-none border-transparent border-2 border-solid w-full
          rounded-sm bg-slate-200 focus:border-cyan-400 text-sm select-none caret-transparent"
          style={{ transition: ".3s ease all" }}
          placeholder="Nhận email của bạn"
          disabled={true}
          defaultValue={profile.email}
        />
      </div>

      <div
        className="px-10 py-2 rounded-md bg-slate-400 hover:bg-slate-500 
        cursor-pointer shadow-md group"
        style={{ transition: "all ease .3s" }}
        onClick={() => {
          if (!loading) {
            submit();
          }
        }}
      >
        <span
          className="text-md text-slate-900 select-none group-hover:text-slate-200"
          style={{ transition: "all ease .3s" }}
        >
          {loading ? "Waiting..." : "Hoàn thành"}
        </span>
      </div>
    </div>
  );
};
