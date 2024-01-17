"use client";
import { seriesApi } from "@/api-client/series";
import { BaseLoading, PaginationChangeComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { useEffect, useMemo, useState } from "react";
import { SeriesByAuthorRow } from "./row";

interface ISeriesByAuthor {
  author: any;
}

export const SeriesByAuthor = (props: ISeriesByAuthor) => {
  const { author } = props;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);

  const params = useMemo(
    () => ({
      author: author._id,
      skip: ((page - 1) * 5).toString(),
      take: "5",
    }),
    [author._id, page]
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

          <PaginationChangeComponent
            current={page}
            total={getCountPage(total, 5)}
            onchange={(p: number) => {
              if (page !== p) {
                setPage(p);
              }
            }}
          />
        </>
      )}
    </div>
  );
};
