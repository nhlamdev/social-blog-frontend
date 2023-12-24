"use client";
import { contentApi } from "@/api/content";
import { useAuth } from "@/hook/auth.hook";
import { useRouter } from "next/navigation";
import { BsBookmarksFill, BsFillBookmarkXFill } from "react-icons/bs";

interface IBookmarkActionButton {
  content: any;
}

export const BookmarkActionButton = (props: IBookmarkActionButton) => {
  const { content } = props;
  const { profile, firstLoading } = useAuth();
  const router = useRouter();

  if (firstLoading || !profile) {
    return <></>;
  }

  return (
    <div
      className="relative p-2 flex items-center justify-center rounded-full"
      style={{ border: "1px solid black", cursor: "pointer" }}
      onClick={async () => {
        try {
          await contentApi.makeBookmarkContent(content._id);
          router.refresh();
        } catch {}
      }}
    >
      {content.bookmark_by.includes(profile._id) ? (
        <BsFillBookmarkXFill className="text-xl" />
      ) : (
        <BsBookmarksFill className="text-xl" />
      )}
    </div>
  );
};
