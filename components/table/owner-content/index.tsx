"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { OwnerContentRow } from "./row";
import { contentApi } from "@/api-client/content";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import { useClientTranslate } from "@/language/translate-client";
import { PaginationComponent } from "@/components/custom";

interface IOwnerContentTableComponent {
  searchParams: { [key: string]: any };
}

export const OwnerContentTableComponent = (
  props: IOwnerContentTableComponent
) => {
  const { searchParams } = props;
  const { page, search } = searchParams;

  const translate = useClientTranslate();

  const [contents, setContents] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = useMemo(
    () => ({
      skip: (current * 8).toString(),
      take: "8",
      search: search ? search : "",
    }),
    [current, search]
  );

  useEffect(() => {
    setLoading(true);
    contentApi
      .privateWithCreateBy(params)
      .then((res) => {
        const { contents: data, count } = res.data;
        setContents(data);
        setTotal(count);
      })
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            console.log(item);
          });
        } else {
          console.log(
            error?.response ? error.response.data?.message : error.message
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  if (loading) {
    return <span>loading</span>;
  }

  return (
    <>
      <div className="rounded my-6 w-full h-full">
        <table className="bg-slate-100 bg-opacity-20 min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-slate-800 uppercase text-sm leading-normal">
              <th className="py-2 px-4 ">
                <span className="w-full block text-left lg:text-sm text-xs">
                  {translate["TITLE"]}
                </span>
              </th>
              <th className="py-2 px-4 text-center hidden sm:table-cell">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {translate["CREATED_AT"]}
                </span>
              </th>
              <th className="py-2 px-4">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {translate["PUBLIC"]}
                </span>
              </th>
              <th className="py-2 px-4">
                <span className="w-full block text-right lg:text-sm text-xs">
                  {translate["CONTROL"]}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-200 text-sm font-light">
            {contents.map((c: any) => {
              return <OwnerContentRow key={c._id} item={c} />;
            })}
          </tbody>
        </table>
      </div>
      {getCountPage(total, 8) > 1 ? (
        <PaginationComponent
          searchParams={searchParams}
          currentPage={current + 1}
          maxPage={getCountPage(total, 8)}
          queryName="page"
        />
      ) : (
        <></>
      )}
    </>
  );
};
