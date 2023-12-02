"use client";
import { contentApi } from "@/api/content";
import { useEffect, useMemo, useState } from "react";
import { ClientBookMarkListViewItem } from "./item";
import { PaginationDirectComponent } from "@/components/custom";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";

interface IClientBookMarkListView {
  searchParams: { [key: string]: any };
}

export const ClientBookMarkListView = (props: IClientBookMarkListView) => {
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
      skip: (current * 5).toString(),
      take: "5",
      search: search ? search : "",
    }),
    [current, search]
  );

  useEffect(() => {
    setLoading(true);
    contentApi
      .allBookmarkContent(params)
      .then((res) => {
        const {
          data: { data, count },
        } = res;

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
    <div className="flex flex-col w-3/5 gap-2 flex-1">
      {contents.map((content) => {
        return (
          <ClientBookMarkListViewItem key={content._id} content={content} />
        );
      })}

      {total !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(total, 5)}
          urlDirect={(p) => {
            const newSearchParams = {
              ...searchParams,
              page: p.toString(),
            };
            const url = generateURLWithQueryParams(
              "/content/bookmark",
              newSearchParams
            );

            return url;
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};