"use client";
import { contentApi } from "@/api-client/content";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ClientBookMarkListViewItem } from "./item";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import { useAuth } from "@/hook";
import { PaginationComponent } from "@/components/custom";

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

  const fetcher = useCallback(async () => {
    setLoading(true);
    try {
      const {
        data: { contents: payload, count },
      } = await contentApi.myBookmark(params);

      setContents(payload);
      setTotal(count);
    } catch (error: any) {
      if (Array.isArray(error?.response?.data?.message)) {
        error?.response?.data?.message.forEach((item: any) => {
          console.log(item);
        });
      } else {
        console.log(
          error?.response ? error.response.data?.message : error.message
        );
      }
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  if (loading) {
    return <span>loading</span>;
  }

  return (
    <div className="flex flex-col w-full gap-2 flex-1">
      <div className="flex flex-col gap-2 flex-1">
        {contents.map((content) => {
          return (
            <ClientBookMarkListViewItem key={content._id} content={content} />
          );
        })}
      </div>
      {getCountPage(total, 5) > 1 ? (
        <PaginationComponent
          searchParams={searchParams}
          currentPage={current + 1}
          maxPage={getCountPage(total, 5)}
          queryName="page"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
