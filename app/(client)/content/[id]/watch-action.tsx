"use client";

import { contentApi } from "@/api/content";
import { useAuth } from "@/hook/auth-hook";
import { useEffect } from "react";

interface IWatchActionComponent {
  content: any;
}

export const WatchActionComponent = (props: IWatchActionComponent) => {
  const { content } = props;

  const { firstLoading, profile } = useAuth();

  useEffect(() => {
    if (!firstLoading && profile && !content.watches.includes(content._id)) {
      contentApi.makeWatch(content._id);
    }
  }, [content._id, content.watches, firstLoading, profile]);

  return <></>;
};
