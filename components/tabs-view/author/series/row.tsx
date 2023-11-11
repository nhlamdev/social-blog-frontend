import { getDateTime } from "@/utils/global-func";
import Link from "next/link";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from "next/image";

interface SeriesByAuthorRow {
  item: any;
}

export const SeriesByAuthorRow = (props: SeriesByAuthorRow) => {
  const { item } = props;

  return (
    <Link
      href={`/content?series=${item._id}`}
      className="w-full md:w-4/5 lg:w-3/5 flex flex-col gap-2 cursor-pointer overflow-hidden
    bg-slate-100 bg-opacity-40 shadow-sm rounded-md p-4 mx-auto"
    >
      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
        {item.title}
      </span>

      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center gap-2">
          <MdOutlineContentCopy className="text-sm" />
          <span className="text-[10px]">{item.contents} </span>
        </div>

        <div
          className="h-4 bg-slate-600 dark:bg-slate-200 mx-1"
          style={{ width: "1px" }}
        />

        <div className="flex flex-row items-center gap-2">
          <IoMdTimer className="text-sm" />
          <span className="text-[10px]">{getDateTime(item.created_at)}</span>
        </div>
      </div>
    </Link>
  );
};
