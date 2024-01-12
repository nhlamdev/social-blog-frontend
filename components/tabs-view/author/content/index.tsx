"use client";
import { contentApi } from "@/api/content";
import { useEffect, useMemo, useState } from "react";
import { ContentByAuthor } from "./row";
import { BaseLoading, PaginationChangeComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";

interface IContentsByAuthor {
  member: any;
}

export const ContentsByAuthor = (props: IContentsByAuthor) => {
  const { member } = props;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);

  const params = useMemo(
    () => ({
      author: member._id,
      skip: ((page - 1) * 5).toString(),
      take: "5",
    }),
    [member._id, page]
  );

  useEffect(() => {
    setLoading(true);
    contentApi
      .public(params)
      .then((res) => {
        const {
          data: { data, max },
        } = res;

        setData(data);
        setTotal(max);
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
