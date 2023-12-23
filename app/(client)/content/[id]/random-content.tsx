import { serverMappingLanguage } from "@/language/translate-server";
import { capitalizeFirstLetter, getDateTime } from "@/utils/global-func";
import Link from "next/link";

interface RandomContentComponentProps {
  contents: any[];
}

export const RandomContentComponent = (props: RandomContentComponentProps) => {
  const { contents } = props;

  return (
    <div
      className="flex flex-col w-full"
      style={{ justifyContent: "space-between", gap: "10px" }}
    >
      {contents?.map((c: any, key: number) => {
        return (
          <Link
            key={c._id + `-${key}-random`}
            href={`/content/${c._id}`}
            className="w-[min(100%,800px)] mx-auto flex flex-col relative gap-2 sm:gap-4 p-4
            cursor-pointer rounded-md shadow-md overflow-hidden "
            style={{
              border: "1px solid white",
            }}
          >
            <span
              className="text-md font-bold text-slate-900 dark:text-slate-200
              line-clamp-2 break-words"
            >
              {c.title}
            </span>
            <span
              className="text-xs font-medium text-slate-900 dark:text-slate-200
              p-1 rounded-md border-slate-900 w-fit"
              style={{ border: "1px solid" }}
            >
              {c.category}
            </span>
            <span
              className="text-xs font-light text-slate-900 dark:text-slate-200
              line-clamp-2 break-words"
            >
              {capitalizeFirstLetter(serverMappingLanguage("JOIN_AT"))} :{" "}
              {getDateTime(c.created_at)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};
