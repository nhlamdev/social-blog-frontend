"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ListViewItem } from "./item";
import { seriesApi } from "@/api-client/series";
import { EmptyDataComponent, PaginationComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";

interface OwnerSeriesListViewProps {
  searchParams: { [key: string]: any };
}

export const OwnerSeriesListView = (props: OwnerSeriesListViewProps) => {
  const { searchParams } = props;

  const { page, search } = searchParams;

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

  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchAction = useCallback(
    async (params: { skip: string; take: string; search: any }) => {
      setLoading(true);

      try {
        const {
          data: { series, count },
        } = await seriesApi.getByCreateBy(params);

        if (series && series.length !== 0) {
          setSeries(series);
        }

        if (count && count >= 0) {
          setTotal(count);
        }
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
    },
    []
  );

  useEffect(() => {
    fetchAction(params);
  }, [fetchAction, params]);

  if (loading) {
    return <span>loading</span>;
  }

  if (series.length === 0) {
    return (
      <>
        <EmptyDataComponent />
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
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full items-center h-full">
        {series?.map((v: any) => {
          return (
            <ListViewItem
              key={v._id}
              item={v}
              reload={() => fetchAction(params)}
            />
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
    </>
  );
};
