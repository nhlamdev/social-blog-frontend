import { CommentsComponent } from "@/components/custom/comments";
import { PageProps } from "@/interface";
import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RandomContentComponent } from "./random-content";

const backend = process.env.SERVICE_PORT;

export default async function ClientDetailContentPage(props: PageProps) {
  const { params } = props;
  const { id } = params;

  if (!id && !backend) {
    notFound();
  }

  const { data: content } = await axios.get(
    `http://localhost:${backend}/content/${id}`
  );

  const { data: randomContens } = await axios.get(
    `http://localhost:${backend}/content/random?take=4`
  );

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative ">
      <div
        style={{
          alignItems: "center",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            content: '""',
            zIndex: "-1",
            border: "5px",
            position: "absolute",
            width: "100%",
            height: "80%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        />

        <div className="h-48 relative aspect-video">
          <Image
            src={`/service/${content.images[0].fileName}`}
            quality={75}
            fill
            style={{
              objectFit: "cover",
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            }}
            alt="photo"
          />
        </div>
      </div>

      <span className="text-slate-800 dark:text-slate-200 font-semibold text-2xl">
        {content.title}
      </span>
      {/* ----------------- */}
      <div className="p-2 bg-slate-100 bg-opacity-80 w-full lg:w-4/5 min-h-[300px] rounded-md">
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

        <RandomContentComponent contents={randomContens} />
      </div>

      {id ? (
        <CommentsComponent contentId={id} countComment={content.countComment} />
      ) : (
        <></>
      )}
    </div>
  );
}
