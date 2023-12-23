import Link from "next/link";
import { BiBookContent } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
import Image from "next/image";
import { SiSteelseries } from "react-icons/si";
import { getDateTime } from "@/utils/global-func";
import { clientMappingLanguage } from "@/language/translate-client";
import { serverMappingLanguage } from "@/language/translate-server";

interface IListViewAuthorsItem {
  member: any;
}

export const ListViewAuthorsItem = (props: IListViewAuthorsItem) => {
  const { member } = props;

  return (
    <Link
      href={`/author/${member._id}`}
      key={member._id}
      className="flex flex-col rounded-lg gap-1 bg-slate-200 bg-opacity-40 p-4
              hover:shadow-md w-full"
      style={{
        transition: "all ease .3s",
        cursor: "pointer",
      }}
    >
      <div className="flex flex-row gap-2 w-full">
        <div className="w-8 h-8 aspect-square rounded-full shadow-lg overflow-hidden relative">
          <Image
            src={`/service/${member.image}`}
            style={{ objectFit: "cover" }}
            fill
            alt="image"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
            {member.name}
          </span>
          <span className="text-xs font-light text-slate-900 dark:text-slate-200">
            {member.email}
          </span>
        </div>
      </div>

      <span
        className="text-xs font-light text-slate-900 dark:text-slate-200"
        suppressHydrationWarning
      >
        {serverMappingLanguage("JOIN_AT")} : {getDateTime(member.created_at)}
      </span>

      <div className="flex flex-row items-center gap-1">
        <div className="flex flex-row items-center gap-2">
          <BiBookContent className="text-xs text-slate-900 dark:text-slate-200" />
          <span className="text-xs text-slate-900 dark:text-slate-200">
            {member.content_count}
          </span>
        </div>

        <div
          className="h-4 bg-slate-600 dark:bg-slate-200 mx-1"
          style={{ width: "1px" }}
        />
        <div className="flex flex-row items-center gap-2">
          <SiSteelseries className="text-xs text-slate-900 dark:text-slate-200" />
          <span className="text-xs text-slate-900 dark:text-slate-200">
            {member.series_count}
          </span>
        </div>
        <div
          className="h-4 bg-slate-600 dark:bg-slate-200 mx-1"
          style={{ width: "1px" }}
        />
        <div className="flex flex-row items-center gap-2">
          <BsFillBookmarksFill className="text-xs text-slate-900 dark:text-slate-200" />
          <span className="text-xs text-slate-900 dark:text-slate-200">
            {member.follow_by.length}
          </span>
        </div>
      </div>
    </Link>
  );
};
