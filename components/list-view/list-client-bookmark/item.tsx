import Link from "next/link";
import Image from "next/image";
import { getDateTime } from "@/utils/global-func";
import { BiCommentDetail } from "react-icons/bi";
import { LuView } from "react-icons/lu";

interface IClientBookMarkListViewItem {
  content: {
    _id: string;
    title: string;
    count_view: string;
    tags: string[];
    created_at: string;
    created_by: {
      _id: string;
      name: string;
      email: string;
      image: string;
    };
    series: { _id: string; title: string };
    category: { _id: string; title: string };
    count_comments: boolean;
  };
}

export const ClientBookMarkListViewItem = (
  props: IClientBookMarkListViewItem
) => {
  const { content } = props;
  return (
    <div
      className="w-full sm:w-5/6 lg:w-3/5 flex flex-row gap-2 bg-slate-100 bg-opacity-40
      shadow-md rounded-md mx-auto"
    >
      {/* --------------- */}
      <div className="flex flex-col justify-between py-2 md:py-4 px-4 gap-2">
        <Link
          href={`/content/${content._id}`}
          className="group flex flex-col gap-1 cursor-pointer"
        >
          <span
            className="group-hover:underline font-bold text-xs sm:text-sm md:text-md
          text-slate-900 dark:text-slate-100"
          >
            {content.title}
          </span>
        </Link>

        <div className=" flex flex-row gap-2 items-center">
          <div className="w-6 h-6 rounded-full relative overflow-hidden">
            <Image
              src={`/service/${content.created_by.image}`}
              fill
              alt="photo"
            />
          </div>

          <div className="flex flex-row">
            <span className="text-xs font-semibold dark:text-slate-100">
              {content.created_by.name}
            </span>

            <div
              className="h-4 bg-slate-600 dark:bg-slate-200 mx-1"
              style={{ width: "1px" }}
            />

            <span className="font-light text-xs text-slate-900 dark:text-slate-100">
              {getDateTime(content.created_at)}
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          {content.category ? (
            <div
              style={{
                borderRadius: "5px",
                width: "fit-content",
              }}
            >
              <span
                className="font-semibold text-[9px] sm:text-[10px] md:text-[12px] 
            text-slate-900 dark:text-slate-100"
              >
                {content.category?.title}
              </span>
            </div>
          ) : (
            <></>
          )}
          {content.category && content.tags.length !== 0 ? (
            <div
              className="h-4 bg-slate-600 dark:bg-slate-200 mx-1"
              style={{ width: "1px" }}
            />
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
                className="flex flex-row items-center justify-center py-1 px-2"
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "5px",
                }}
              >
                <span
                  className="font-semibold text-[10px] sm:text-[12px] md:text-[14px] text-slate-900 
              dark:text-slate-100"
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center py-1 gap-1">
          <div className="flex flex-row items-center gap-2">
            <LuView className="md:text-xs text-[10px] text-slate-900 dark:text-slate-100" />
            <span className="md:text-xs font-semibold text-[10px] text-slate-900 dark:text-slate-100">
              {content.count_view}
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BiCommentDetail className="md:text-xs text-[10px] text-slate-900 dark:text-slate-100" />
            <span className="md:text-xs font-semibold text-[10px] text-slate-900 dark:text-slate-100">
              {content.count_comments}
            </span>
          </div>
        </div>
      </div>

      {/* --------------- */}
    </div>
  );
};
