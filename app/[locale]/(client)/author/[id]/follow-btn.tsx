"use client";
import { authApi } from "@/api-client/auth";
import { useAuth } from "@/hook/auth.hook";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { FaPlus } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { useClientTranslate } from "@/language/translate-client";
import { apiCaller } from "@/api-client";
interface IFollowButton {
  author: any;
}

export const FollowButton = (props: IFollowButton) => {
  const { author } = props;

  const { firstLoading, profile } = useAuth();

  const translate = useClientTranslate();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (firstLoading || !profile) {
    return <></>;
  }

  if (author._id === profile._id) {
    return (
      <div
        className="flex flex-row items-center gap-2 cursor-pointer bg-slate-400
        rounded-md hover:shadow-sm px-4 py-2 w-fit bg-opacity-40"
      >
        <span className="select-none text-slate-900 dark:text-slate-200">
          {author.follow_by.length}
        </span>
        <span className="select-none text-slate-900 dark:text-slate-200">
          {translate["FOLLOWERS"]}
        </span>
      </div>
    );
  }

  const submit = () => {
    if (loading === false) {
      setLoading(true);

      apiCaller.memberApi
        .follow(author._id)
        .then(() => {
          router.refresh();
        })
        .catch((error) => {
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div
      className="flex flex-row items-center gap-2 cursor-pointer bg-slate-400
    rounded-md hover:shadow-sm px-4 py-2 w-fit bg-opacity-40"
      onClick={() => submit()}
    >
      {author.follow_by.includes(profile._id) ? (
        <FaMinusCircle />
      ) : (
        <FaCirclePlus />
      )}

      <span className="select-none text-slate-900 dark:text-slate-200">
        {author.follow_by.includes(profile._id)
          ? translate["FOLLOWED"]
          : translate["FOLLOW"]}
      </span>
      {author.follow_by.length > 0 ? (
        <span className="select-none text-slate-900 dark:text-slate-200">
          {author.follow_by.length}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};
