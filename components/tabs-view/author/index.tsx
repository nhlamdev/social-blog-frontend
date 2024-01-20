import { CaseAuthorType, CaseViewType } from "@/constant";
import { useClientTranslate } from "@/language/translate-client";
import { generateURLWithQueryParams } from "@/utils/global-func";
import Link from "next/link";
import { AiFillTags } from "react-icons/ai";
import { BiSolidBookContent } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { SiSteelseries } from "react-icons/si";
import { TbCirclesRelation } from "react-icons/tb";
import { ContentsByAuthor } from "./content";
import { FollowedByAuthor } from "./followed";
import { SeriesByAuthor } from "./series";
import { TagsByAuthor } from "./tags";
import { serverTranslate } from "@/language/translate-server";

interface ITabListItem {
  key: CaseViewType;
  title: string;
  icon: IconType;
}

const tabList: ITabListItem[] = [
  { key: "CONTENT", title: "Bài viết", icon: BiSolidBookContent },
  { key: "SERIES", title: "Chuỗi bài viết", icon: SiSteelseries },
  { key: "TAGS", title: "Thẻ", icon: AiFillTags },
  { key: "FOLLOWED", title: "Theo dõi", icon: TbCirclesRelation },
];

interface IAuthorTabsView {
  author: any;
  followers: any[];
  searchParams: { [key: string]: string | undefined };
}

export const AuthorTabsView = (props: IAuthorTabsView) => {
  const { author, followers, searchParams } = props;

  const view = searchParams.view as CaseViewType | undefined;

  const viewTransform =
    view && CaseAuthorType.includes(view) ? view : "CONTENT";

  const translate = serverTranslate();

  return (
    <div className="w-full min-h-full flex flex-col gap-10 flex-1">
      <div className="border-b border-gray-200 dark:border-gray-700 w-full">
        <div className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabList.map((v) => {
            const urlDirect = generateURLWithQueryParams(
              `/author/${author._id}`,
              { ...searchParams, view: v.key }
            );

            if (v.key === viewTransform) {
              return (
                <div
                  key={v.key}
                  className="cursor-pointer flex flex-row items-center justify-center p-4  border-b-2
                 border-blue-600 rounded-t-lg  dark:border-blue-500 gap-2"
                  style={{ transition: "all ease .3s" }}
                >
                  <v.icon
                    className="text-blue-600 dark:text-blue-500 text-xl"
                    style={{ transition: "all ease .3s" }}
                  />
                  <span
                    className="text-xs text-blue-600 dark:text-blue-500"
                    style={{ transition: "all ease .3s" }}
                  >
                    {translate[v.key]}
                  </span>
                </div>
              );
            } else {
              return (
                <Link
                  key={v.key}
                  href={urlDirect}
                  className="cursor-pointer flex flex-row items-center justify-center p-4 border-b-2 
                  border-transparent rounded-t-lg group gap-2"
                  style={{ transition: "all ease .3s" }}
                >
                  <v.icon
                    className="text-gray-400 group-hover:text-gray-500 dark:text-gray-500 
                    dark:group-hover:text-gray-300 text-md text-xl"
                    style={{ transition: "all ease .3s" }}
                  />
                  <span
                    className="text-xs group-hover::border-gray-300 dark:group-hover:text-gray-300 
                  hover:text-gray-600"
                    style={{ transition: "all ease .3s" }}
                  >
                    {translate[v.key]}
                  </span>
                </Link>
              );
            }
          })}
        </div>
      </div>

      {/* ------------------ */}

      {viewTransform === "CONTENT" ? (
        <ContentsByAuthor author={author} searchParams={searchParams} />
      ) : (
        <></>
      )}
      {viewTransform === "FOLLOWED" ? (
        <FollowedByAuthor followers={followers} />
      ) : (
        <></>
      )}
      {viewTransform === "SERIES" ? (
        <SeriesByAuthor author={author} searchParams={searchParams} />
      ) : (
        <></>
      )}
      {viewTransform === "TAGS" ? <TagsByAuthor author={author} /> : <></>}
    </div>
  );
};
