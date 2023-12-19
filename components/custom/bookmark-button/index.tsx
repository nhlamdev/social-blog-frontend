"use client";
import { contentApi } from "@/api/content";
import { useAuth } from "@/hook/auth.hook";
import { useRouter } from "next/navigation";
import { BsBookmarksFill, BsFillBookmarkXFill } from "react-icons/bs";

interface IBookmarkActionButton {
  content: any;
  size?: "medium" | "small";
}

export const BookmarkActionButton = (props: IBookmarkActionButton) => {
  const { content, size } = props;
  const { profile, firstLoading } = useAuth();
  const router = useRouter();

  if (firstLoading || !profile) {
    return <></>;
  }

  return (
    <div
      className="relative p-2 flex items-center justify-center rounded-full 
      text-slate-900 dark:text-slate-200"
      style={{ border: "1px solid", cursor: "pointer" }}
      onClick={async () => {
        try {
          await contentApi.makeBookmarkContent(content._id);
          router.refresh();
        } catch {}
      }}
    >
      {content.bookmark_by.includes(profile._id) ? (
        <BsFillBookmarkXFill
          className={`text-slate-900 dark:text-slate-200 ${
            size === "small" ? "text-md" : "text-xl"
          }`}
        />
      ) : (
        <BsBookmarksFill
          className={`text-slate-900 dark:text-slate-200 ${
            size === "small" ? "text-md" : "text-xl"
          }`}
        />
      )}
    </div>
  );
};
