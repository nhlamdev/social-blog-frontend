"use client";
import { contentApi } from "@/api-client/content";
import { useEffect, useMemo, useState } from "react";
import { ContentByAuthor } from "./row";
import { BaseLoading, PaginationComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";

interface IContentsByAuthor {
  author: any;
  searchParams: { [key: string]: string | undefined };
}

export const ContentsByAuthor = (props: IContentsByAuthor) => {
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
    contentApi
      .public(params)
      .then((res) => {
        const {
          data: { contents: payload, count },
        } = res;

        setData(payload);
        setTotal(count);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  return (
    <div className="min-h-full gap-2 flex flex-col w-3/4 mx-auto flex-1">
      {loading ? (
        <div className="flex items-center justify-center w-full">
          <BaseLoading title="Đang tải dữ liệu" />
        </div>
      ) : (
        <>
          <div className="gap-2 flex flex-col flex-1 ">
            {data.map((content) => {
              return <ContentByAuthor key={content._id} content={content} />;
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
      )}
    </div>
  );
};
