"use client";
import { seriesApi } from "@/api-client/series";
import { BaseLoading, PaginationComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { useEffect, useMemo, useState } from "react";
import { SeriesByAuthorRow } from "./row";

interface ISeriesByAuthor {
  author: any;
  searchParams: { [key: string]: string | undefined };
}

export const SeriesByAuthor = (props: ISeriesByAuthor) => {
  const { author, searchParams } = props;
  const { page } = searchParams;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = useMemo(
    () => ({
      author: author._id,
      skip: (current * 5).toString(),
      take: "5",
    }),
    [author._id, current]
  );

  useEffect(() => {
    setLoading(true);
    seriesApi
      .paginate(params)
      .then((res) => {
        const {
          data: { series: payload, count },
        } = res;

        setData(payload);
        setTotal(count);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  return (
    <div className="min-h-full flex flex-col gap-2  flex-1">
      {loading ? (
        <div className="flex items-center justify-center w-full">
          <BaseLoading title="Đang tải dữ liệu" />
        </div>
      ) : (
        <>
          <div className="gap-2 flex flex-col flex-1 ">
            {data.map((s) => {
              return <SeriesByAuthorRow key={s._id} item={s} />;
            })}
          </div>

          {getCountPage(total, 6) > 1 ? (
            <PaginationComponent
              searchParams={searchParams}
              currentPage={current + 1}
              maxPage={getCountPage(total, 6)}
              queryName="page"
            />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};
