import Link from "next/link";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { getDateTime } from "@/utils/global-func";

interface SeriesItemProps {
  item: any;
}

export const SeriesItem = (props: SeriesItemProps) => {
  const { item } = props;
  return (
    <Link
      href={`/content?series=${item._id}`}
      className="w-full md:w-4/5 lg:w-3/5 flex flex-col gap-2 cursor-pointer overflow-hidden
      bg-slate-100 bg-opacity-40 shadow-sm rounded-md p-4"
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

      <div className="flex flex-row w-full gap-2 items-center">
        <div className="w-6 h-6 relative">
          <Image
            src={`/service/${item.created_by.image}`}
            className="rounded-full"
            fill
            alt="photo"
          />
        </div>

        <span className="text-xs text-slate-900 dark:text-slate-100">
          {item.created_by.name}
        </span>
      </div>
    </Link>
  );
};
