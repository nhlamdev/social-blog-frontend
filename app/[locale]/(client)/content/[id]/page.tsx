import { BookmarkActionButton, VoteContentControl } from "@/components/custom";
import { CommentsComponent } from "@/components/custom/comments";
import { PageProps } from "@/interface";
import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RandomContentComponent } from "./random-content";
import { WatchActionComponent } from "./watch-action";
import { serverTranslate } from "@/language/translate-server";
import { Suspense } from "react";

const backend = process.env.SERVICE_PORT;

export default async function ClientDetailContentPage(props: PageProps) {
  const {
    params: { id },
    searchParams,
  } = props;
  const translate = serverTranslate();

  if (!id && !backend) {
    notFound();
  }

  const { data: content } = await axios.get(
    `http://localhost:${backend}/content/by-id/${id}`
  );

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative ">
      <WatchActionComponent content={content} />
      <div className="flex flex-col w-full lg:w-4/5 items-center gap-2">
        <div className="flex flex-row w-full gap-4 items-center">
          <VoteContentControl content={content} />

          <div className="flex flex-col flex-1 gap-2">
            <div className="flex flex-col flex-1">
              <span className="text-slate-900 dark:text-slate-200 font-semibold text-2xl select-none">
                {content.title}
              </span>

              <span className="text-slate-900 dark:text-slate-200 font-light text-md select-none">
                {getDateTime(content.created_at)}
              </span>
            </div>

            <div className="flex flex-row gap-2 items-center w-full">
              <div className="relative w-8 h-8">
                <Image
                  src={`/service/${content.created_by.image}`}
                  fill
                  style={{ borderRadius: "50%" }}
                  alt="photo"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-900 dark:text-slate-200">
                  {content.created_by.name}
                </span>
                <span className="text-xs text-slate-900 dark:text-slate-200">
                  {content.created_by.email}
                </span>
              </div>
            </div>
          </div>

          <BookmarkActionButton content={content} />
        </div>
      </div>

      {/* ----------------- */}
      <div className="p-2 bg-slate-100 bg-opacity-80 w-full lg:w-4/5 min-h-[300px] rounded-md relative">
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </div>
      {/* ---------------- */}

      <Suspense fallback={<div>loading</div>}>
        {id ? (
          <CommentsComponent
            contentId={id}
            countComment={content.countComment}
            searchParams={searchParams}
          />
        ) : (
          <></>
        )}
      </Suspense>

      {/* ----------------- */}
      <div className="flex flex-col w-full gap-2">
        <p className="text-slate-800 dark:text-slate-200 font-semibold text-lg text-center">
          {translate["RANDOM_CONTENT"]}
        </p>

        <Suspense fallback={<div></div>}>
          <RandomContentComponent />
        </Suspense>
      </div>
    </div>
  );
}
