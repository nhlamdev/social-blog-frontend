"use client";
import { authApi } from "@/api/auth";
import { ISession } from "@/interface";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SessionRow } from "./row";
import { enqueueSnackbar } from "notistack";
import { useSearchParams } from "next/navigation";
import { PaginationDirectComponent } from "@/components/custom";
import {
  capitalizeFirstLetter,
  generateURLWithQueryParams,
  getCountPage,
} from "@/utils/global-func";
import { useClientTranslate } from "@/language/translate-client";

export const HistoryLoginTable = () => {
  const [session, setSession] = useState<ISession[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const translate = useClientTranslate();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = useMemo(
    () => ({
      skip: (current * 5).toString(),
      take: "5",
    }),
    [current]
  );

  const fetchData = useCallback(() => {
    setLoading(true);
    authApi
      .session(params)
      .then((res) => {
        const { data, count } = res.data;
        setTotal(count);
        setSession(data);
      })
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            enqueueSnackbar(item, { variant: "error" });
          });
        } else {
          enqueueSnackbar(
            error?.response ? error.response.data?.message : error.message,
            { variant: "error" }
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <span>loading</span>;
  }

  return (
    <>
      <div className="rounded my-6 w-full h-full overflow-auto">
        <table className="bg-slate-100 bg-opacity-20 min-w-[600px] md:min-w-max md:w-full table-auto ">
          <thead>
            <tr className="bg-gray-200 text-slate-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6">
                <span className="w-full block text-left lg:text-sm text-xs">
                  Thông tin
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {capitalizeFirstLetter(translate["CREATED_AT"])}
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  Thiết bị
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  Loại
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  Thao tác
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-200 text-sm font-light">
            {session.map((s) => {
              return (
                <SessionRow key={s._id} item={s} reload={() => fetchData()} />
              );
            })}
          </tbody>
        </table>
      </div>
      {total !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(total, 8)}
          urlDirect={(p) => {
            const newSearchParams = {
              page: p.toString(),
            };
            const url = generateURLWithQueryParams(
              "/owner/session",
              newSearchParams
            );

            return url;
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};
