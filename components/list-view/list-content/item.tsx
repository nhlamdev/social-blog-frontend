import Image from "next/image";
import { getDateTime } from "@/utils/global-func";
// import { HomeClientContentItem } from "@/model";
import Link from "next/link";

interface ClientHomeListContentItemProps {
  content: any;
}

export const ClientHomeListContentItem = (
  props: ClientHomeListContentItemProps
) => {
  const { content } = props;

  return (
    <Link
      href={`/content/${content._id}`}
      className="w-full flex flex-row gap-2 bg-slate-100 bg-opacity-40 cursor-pointer 
      shadow-md rounded-md"
    >
      <picture>
        <img
          src={`/service/${content.image.fileName}`}
          className="h-28 sm:h-32 md:h-40 aspect-square "
          style={{
            objectFit: "cover",
            borderRadius: "5px",
          }}
          alt="photo"
        />
      </picture>

      {/* --------------- */}
      <div className="flex flex-col justify-between py-2 sm:py-4 px-4">
        <div className="flex flex-col" style={{ gap: "5px" }}>
          <span className="font-bold text-xs sm:text-sm md:text-md text-slate-900">
            {content.title}
          </span>
        </div>

        <div className=" flex flex-row gap-2 items-center">
          <div className="w-6 h-6 rounded-full relative overflow-hidden">
            <Image src={content.created_by.image} fill alt="photo" />
          </div>

          <div className="flex flex-row">
            <span className="text-xs font-semibold">
              {content.created_by.name}
            </span>

            <div className="h-4 bg-slate-600 mx-1" style={{ width: "1px" }} />

            <span className="font-light text-xs text-slate-900">
              {getDateTime(content.created_at)}
            </span>
          </div>
        </div>

        {content.category ? (
          <div
            style={{
              borderRadius: "5px",
              width: "fit-content",
            }}
          >
            <span className="font-semibold text-[9px] sm:text-[10px] md:text-[12px] text-slate-900">
              {content.category?.title}
            </span>
          </div>
        ) : (
          <></>
        )}

        <div
          className="flex flex-row"
          style={{ flexWrap: "wrap", gap: "10px" }}
        >
          {content.tags.map((t: string, key: number) => (
            <div
              key={`tags-${content._id}-${key}-${t}`}
              className="flex flex-row items-center justify-center"
              style={{
                padding: "5px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
              }}
            >
              <span className="font-semibold text-[10px] sm:text-[12px] md:text-[14px] text-slate-900">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --------------- */}
    </Link>
  );
};
