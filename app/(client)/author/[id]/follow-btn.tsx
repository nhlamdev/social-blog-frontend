"use client";
import { authApi } from "@/api/auth";
import { useAuth } from "@/hook/auth-hook";
import { useState } from "react";
import { BsBookmarksFill, BsFillBookmarkXFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { FaPlus } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
interface IFollowButton {
  member: any;
}

export const FollowButton = (props: IFollowButton) => {
  const { member } = props;

  const { firstLoading, profile } = useAuth();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (firstLoading || !profile) {
    return <></>;
  }

  if (member._id === profile._id) {
    return (
      <div
        className="flex flex-row items-center gap-2 cursor-pointer bg-slate-400
  rounded-md hover:shadow-sm px-4 py-2 w-fit bg-opacity-40"
      >
        {/* <BsBookmarksFill /> */}
        <span className="select-none">Theo dõi</span>
        {member.follow_by.length > 0 ? (
          <span className="select-none">{member.follow_by.length}</span>
        ) : (
          <></>
        )}
      </div>
    );
  }

  const submit = () => {
    if (loading === false) {
      setLoading(true);

      authApi
        .updateFollowed(member._id)
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
      {member.follow_by.includes(profile._id) ? (
        <FaMinusCircle />
      ) : (
        <FaCirclePlus />
      )}

      <span className="select-none">Theo dõi</span>
      {member.follow_by.length > 0 ? (
        <span className="select-none">{member.follow_by.length}</span>
      ) : (
        <></>
      )}
    </div>
  );
};
