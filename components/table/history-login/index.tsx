"use client";
import { authApi } from "@/api/auth";
import { ISession } from "@/interface";
import { useCallback, useEffect, useState } from "react";
import { SessionRow } from "./row";
import { enqueueSnackbar } from "notistack";

export const HistoryLoginTable = () => {
  const [session, setSession] = useState<ISession[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    authApi
      .session()
      .then((res) => {
        const { data } = res;
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <span>loading</span>;
  }

  return (
    <table className="bg-slate-100 bg-opacity-20 min-w-max w-full table-auto">
      <thead>
        <tr className="bg-gray-200 text-slate-800 uppercase text-sm leading-normal">
          <th className="py-3 px-6">
            <span className="w-full block text-left lg:text-sm text-xs">
              Thông tin
            </span>
          </th>
          <th className="py-3 px-6">
            <span className="w-full block text-center lg:text-sm text-xs">
              Ngày tạo
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
          return <SessionRow key={s._id} item={s} reload={() => fetchData()} />;
        })}
      </tbody>
    </table>
  );
};
