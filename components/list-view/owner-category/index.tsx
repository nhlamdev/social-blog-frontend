"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ListViewItem } from "./item";
import { categoryApi } from "@/api-client/category";
import { EmptyDataComponent, PaginationComponent } from "@/components/custom";
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

  const params = useMemo(() => {
    let values: { skip?: string; take: string; search?: string } = {
      take: "5",
    };

    if (current !== 0) {
      values["skip"] = (current * 5).toString();
    }

    if (Boolean(search) && typeof search === "string") {
      values["search"] = search;
    }

    return values;
  }, [current, search]);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchAction = useCallback(
    async (params: { skip?: string; take: string; search?: string }) => {
      setLoading(true);

      try {
        const {
          data: { categories: result, count },
        } = await categoryApi.ownerPaginate(params);

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
