"use client";
import { usePathname } from "next/navigation";
import { PageItem } from "./page-item";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

interface IPaginationComponent {
  currentPage: number;
  maxPage: number;
  queryName: string;
  searchParams?: { [key: string]: string | undefined };
}

export const PaginationComponent = (props: IPaginationComponent) => {
  const { currentPage, maxPage, searchParams, queryName } = props;

  const pathname = usePathname();

  const directMapping = (p: number) =>
    generateURLWithQueryParams(pathname, {
      ...searchParams,
      [queryName]: p.toString(),
    });

  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <Link
        href={directMapping(1)}
        className={`rounded-md bg-slate-600 bg-opacity-40 size-8 flex 
        text-slate-900 dark:text-slate-100 items-center justify-center 
        hover:shadow-xl shadow-sm`}
        style={{
          opacity: currentPage === 1 ? 0.6 : 1,
          transition: "all ease .3s",
        }}
      >
        <FaAngleDoubleLeft className="text-md font-semibold text-slate-900 dark:text-slate-100" />
      </Link>

      {currentPage > 1 ? (
        <PageItem
          page={currentPage - 1}
          href={directMapping(currentPage - 1)}
        />
      ) : (
        <></>
      )}

      <PageItem
        isCurrent
        page={currentPage}
        href={directMapping(currentPage)}
      />

      {currentPage < maxPage ? (
        <PageItem
          page={currentPage + 1}
          href={directMapping(currentPage + 1)}
        />
      ) : (
        <></>
      )}

      <Link
        href={directMapping(maxPage)}
        className="rounded-md bg-slate-600 bg-opacity-40 size-8 flex 
      text-slate-900 dark:text-slate-100 items-center justify-center 
        hover:shadow-xl shadow-sm"
        style={{
          opacity: currentPage === maxPage ? 0.6 : 1,
          transition: "all ease .3s",
        }}
      >
        <FaAngleDoubleRight className="text-md font-semibold text-slate-900 dark:text-slate-100" />
      </Link>
    </div>
  );
};
