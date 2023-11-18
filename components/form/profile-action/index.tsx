"use client";
import Image from "next/image";
import { useAuth } from "@/hook/auth-hook";
import { useCallback, useRef, useState } from "react";
import { FaRegImage } from "react-icons/fa";
import { authApi } from "@/api/auth";
import { enqueueSnackbar } from "notistack";

export const ProfileActionComponent = () => {
  const { error, firstLoading, logout, profile } = useAuth();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  const image = useCallback(() => {
    if (
      imageRef.current &&
      imageRef.current.files &&
      imageRef.current.files.length > 0
    ) {
      return URL.createObjectURL(imageRef.current?.files[0]);
    } else {
      return `/service/${profile.image}`;
    }
  }, [profile.image]);

  if (firstLoading) {
    return <div>loading</div>;
  }

  const submit = async () => {
    console.log(1);

    if (!nameRef.current) {
      console.log(2);
      return;
    }

    const name = nameRef.current.value;

    if (!Boolean(name)) {
      console.log(3);
      return;
    }

    const formData = new FormData();

    const image = imageRef.current?.files;

    if (typeof image !== "string" && image && image[0]) {
      console.log(4, " ", image[0]);
      formData.append("files", image[0], image[0].name);
    }

    formData.append("name", name);

    setLoading(true);
    console.log(5);
    try {
      await authApi.updateProle(formData);
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
      className="w-2/5 h-fit flex flex-col gap-10 items-center justify-center px-10 py-6 
      rounded-lg shadow-lg bg-slate-400 bg-opacity-40"
    >
      <div className="relative w-24 h-24 rounded-full shadow-lg">
        <Image
          src={image()}
          fill
          loading="lazy"
          className="object-cover"
          style={{ borderRadius: "50%", border: "2px solid black" }}
          alt="profile image"
        />

        <div
          className="absolute p-2 bg-slate-300 rounded-full shadow-md cursor-pointer"
          style={{ bottom: 0, right: 0 }}
          onClick={() => imageRef.current?.click()}
        >
          <FaRegImage className="text-md" />
        </div>

        <input type="file" hidden ref={imageRef} />
      </div>

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
