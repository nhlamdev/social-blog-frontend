import { PageProps } from "@/interface";
import axios from "axios";
import { notFound } from "next/navigation";
import { RandomContentComponent } from "./random-content";
import Link from "next/link";
import { getDateTime } from "@/utils/global-func";

// const RandomContentComponent = dynamic(
//   () => import("./random-content").then((mod) => mod.RandomContentComponent),
//   {
//     loading: () => <p>Loading...</p>,
//     ssr: false,
//   }
// );
import { CommentsComponent } from "@/components/custom/comments";

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

        <picture>
          <img
            src={`/service/${content.image.fileName}`}
            className="w-48 aspect-video rounded-md shadow-lg"
            style={{
              objectFit: "cover",
            }}
            alt="photo"
          />
        </picture>
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

        {/* <div
          className="flex flex-col lg:flex-row w-full"
          style={{ justifyContent: "space-between", gap: "10px" }}
        >
          {randomContents?.map((c: any, key: number) => {
            console.log("content : ", c);
            return (
              <Link
                key={c.content__id + `-${key}-random`}
                href={`/content/${c.content__id}`}
                className="lg:w-1/4 w-full flex lg:flex-col flex-row lg:aspect-video"
                style={{
                  position: "relative",
                  cursor: "pointer",
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "1px solid white",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              >
                <picture>
                  <img
                    src={`/service/${c.image_fileName}`}
                    style={{ objectFit: "cover" }}
                    className="relative lg:w-full h-28 lg:h-full"
                    alt="Landscape picture"
                  />
                </picture>

                <div
                  className="w-full lg:bottom-0 lg:bg-slate-600 lg:bg-opacity-80 
            lg:absolute static py-2 px-4"
                >
                  <span
                    className="text-md font-bold text-slate-900 lg:text-slate-100"
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      lineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      wordBreak: "break-word",
                    }}
                  >
                    {c.content_title}
                  </span>

                  <span
                    className="text-xs lg:text-[10px] font-light text-slate-900 lg:text-slate-100"
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      lineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      wordBreak: "break-word",
                    }}
                  >
                    Ngày tạo : {getDateTime(c.content_created_at)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div> */}
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
