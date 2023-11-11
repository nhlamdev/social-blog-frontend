import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import { LuView } from "react-icons/lu";

interface IContentByAuthor {
  content: any;
}

export const ContentByAuthor = (props: IContentByAuthor) => {
  const { content } = props;

  return (
    <div
      key={content._id}
      className="w-full flex flex-row gap-2 bg-slate-100 bg-opacity-40
      shadow-md rounded-md"
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
