import { getDateTime } from "@/utils/global-func";
import Link from "next/link";

interface RandomContentComponentProps {
  contents: any[];
}

export const RandomContentComponent = (props: RandomContentComponentProps) => {
  const { contents } = props;

  return (
    <div
      className="flex flex-col lg:flex-row w-full"
      style={{ justifyContent: "space-between", gap: "10px" }}
    >
      {contents?.map((c: any, key: number) => {
        return (
          <Link
            key={c.content__id + `-${key}-random`}
            href={`/content/${c.content__id}`}
            className="lg:w-1/4 w-full flex lg:flex-col flex-row lg:aspect-video relative
            cursor-pointer rounded-md shadow-md overflow-hidden"
            style={{
              border: "1px solid white",
            }}
          >
            <picture className="h-full">
              <img
                src={`/service/${c.image_fileName}`}
                style={{ objectFit: "cover" }}
                className="lg:w-full h-28 lg:h-full"
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
    </div>
  );
};
