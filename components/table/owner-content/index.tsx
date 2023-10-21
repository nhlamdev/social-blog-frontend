"use client";
import { useEffect, useMemo, useState } from "react";
import { OwnerContentRow } from "./row";
import { contentApi } from "@/api/content";
import { PaginationDirectComponent } from "@/components/custom";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";

interface IOwnerContentTableComponent {
  searchParams: { [key: string]: any };
}

export const OwnerContentTableComponent = (
  props: IOwnerContentTableComponent
) => {
  const { searchParams } = props;
  const { page, search } = searchParams;

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
      .allByUserCreate(params)
      .then((res) => {
        const [data, total] = res.data;
        setContents(data);
        setTotal(total);
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
              <th className="py-3 px-6">
                <span className="w-full block text-left lg:text-sm text-xs">
                  Tiêu đề
                </span>
              </th>
              <th className="py-3 px-6 text-center">
                <span className="w-full block text-center lg:text-sm text-xs">
                  Ngày tạo
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  Công khai
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-right lg:text-sm text-xs">
                  Thao tác
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
      {total !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(total, 8)}
          urlDirect={(p) => {
            const newSearchParams = {
              ...searchParams,
              page: p.toString(),
            };
            const url = generateURLWithQueryParams(
              "/owner/content",
              newSearchParams
            );

            return url;
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};
