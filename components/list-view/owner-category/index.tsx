"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ListViewItem } from "./item";
import { categoryApi } from "@/api/category";
import {
  EmptyDataComponent,
  PaginationDirectComponent,
} from "@/components/custom";
import { getCountPage } from "@/utils/global-func";

interface OwnerCategoryListViewProps {
  searchParams: { [key: string]: any };
}

export const OwnerCategoryListView = (props: OwnerCategoryListViewProps) => {
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

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchAction = useCallback(
    async (params: { skip: string; take: string; search: any }) => {
      setLoading(true);

      try {
        const {
          data: { categories: result, count },
        } = await categoryApi.paginate(params);

        if (result && result.length !== 0) {
          setCategories(result);
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

  if (categories.length === 0) {
    return (
      <>
        <EmptyDataComponent />
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
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full items-center h-full">
        {categories.map((v: any) => {
          return (
            <ListViewItem
              key={v._id}
              item={v}
              reload={() => fetchAction(params)}
            />
          );
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
