import { getDateTime } from "@/utils/global-func";
import Image from "next/image";
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
            {/* <div className="relative lg:w-full h-28 lg:h-full aspect-square">
              <Image
                src={`/service/${c.images[0].fileName}`}
                fill
                quality={75}
                style={{ objectFit: "cover" }}
                alt="photo"
              />
            </div> */}

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
                {c.title}
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
