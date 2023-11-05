import { getDateTime } from "@/utils/global-func";
import Link from "next/link";
import Image from "next/image";
import { LuView } from "react-icons/lu";

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
            className="w-full flex flex-col relative gap-2 p-2
            cursor-pointer rounded-md shadow-md overflow-hidden"
            style={{
              border: "1px solid white",
            }}
          >
            <span
              className="text-md font-bold text-slate-900"
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
              className="text-xs font-medium text-slate-900 p-1 rounded-md border-slate-900 w-fit"
              style={{ border: "1px solid" }}
            >
              {c.category}
            </span>
            <span
              className="text-xs font-light text-slate-900 "
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                lineClamp: 2,
                WebkitBoxOrient: "vertical",
                wordBreak: "break-word",
              }}
            >
              Ngày tạo : {getDateTime(c.created_at)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};
