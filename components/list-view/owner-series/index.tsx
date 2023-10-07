"use client";
import { useEffect, useMemo, useState } from "react";
import { ListViewItem } from "./item";
import { seriesApi } from "@/api/series";
import {
  EmptyDataComponent,
  PaginationDirectComponent,
} from "@/components/custom";
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

  useEffect(() => {
    setLoading(true);
    seriesApi
      .getByCreateBy(params)
      .then((res) => {
        const { data, max } = res.data;

        if (data && data.length !== 0) {
          setSeries(data);
        }

        if (max && max >= 0) {
          setTotal(max);
        }
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

  if (series.length === 0) {
    return (
      <>
        <EmptyDataComponent />
        {total !== 0 ? (
          // eslint-disable-next-line react/jsx-no-undef
          <PaginationDirectComponent
            current={current + 1}
            total={getCountPage(total, 5)}
            urlDirect={(p) => `/owner/category?page=${p}`}
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
          return <ListViewItem key={v._id} item={v} />;
        })}
      </div>

      {total !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(total, 5)}
          urlDirect={(p) => `/owner/category?page=${p}`}
        />
      ) : (
        <></>
      )}
    </>
  );
};
