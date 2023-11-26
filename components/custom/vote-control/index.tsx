"use client";
import { contentApi } from "@/api/content";
import { useAuth } from "@/hook/auth-hook";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

interface IVoteContentControl {
  content: any;
}

export const VoteContentControl = (props: IVoteContentControl) => {
  const { content } = props;

  const { profile, firstLoading } = useAuth();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submit = async (caseAction: "up" | "down") => {
    if (loading || firstLoading || !profile) {
      return;
    }

    try {
      await contentApi.voteAction(content._id, caseAction);
      router.refresh();
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <FaChevronCircleUp
        className={`cursor-pointer text-lg text-${
          content.member_up_vote.includes(profile?._id) ? "cyan" : "gray"
        }-900`}
        onClick={() => submit("up")}
      />

      <span className="font-semibold select-none">
        {content.member_up_vote.length - content.member_down_vote.length}
      </span>

      <FaChevronCircleDown
        className={`cursor-pointer text-lg text-${
          content.member_down_vote.includes(profile?._id) ? "cyan" : "gray"
        }-900`}
        onClick={() => submit("down")}
      />
    </div>
  );
};
