import { PageProps } from "@/interface";
import axios from "axios";
import { notFound } from "next/navigation";
import { RandomContentComponent } from "./random-content";
import { CommentsComponent } from "@/components/custom/comments";
import Image from "next/image";
import { getDateTime } from "@/utils/global-func";
import { MdFavorite } from "react-icons/md";

const backend = process.env.SERVICE_PORT;

export default async function ClientDetailContentPage(props: PageProps) {
  const { params } = props;
  const { id } = params;

  if (!id && !backend) {
    notFound();
  }

  const { data: content } = await axios.get(
    `http://localhost:${backend}/content/by-id/${id}`
  );

  if (!content) {
    notFound();
  }

  const { data: randomContents } = await axios.get(
    `http://localhost:${backend}/content/random?take=4`
  );

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative ">
      <div className="flex flex-col w-full lg:w-4/5">
        <span className="text-slate-800 dark:text-slate-200 font-semibold text-2xl select-none">
          {content.title}
        </span>

        <span className="text-slate-800 dark:text-slate-200 font-light text-md select-none">
          {getDateTime(content.created_at)}
        </span>
      </div>

      {/* ----------------- */}
      <div className="p-2 bg-slate-100 bg-opacity-80 w-full lg:w-4/5 min-h-[300px] rounded-md relative">
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </div>
      {/* ---------------- */}

      {/* ----------------- */}
      <div className="flex flex-col w-full gap-2">
        <p className="text-slate-800 dark:text-slate-200 font-semibold text-lg text-center">
          Bài viết ngẫu nhiên
        </p>

        <RandomContentComponent contents={randomContents} />
      </div>

      {id ? (
        <CommentsComponent contentId={id} countComment={content.countComment} />
      ) : (
        <></>
      )}
    </div>
  );
}
