"use client";
import { authApi } from "@/api/auth";
import { PaginationDirectComponent } from "@/components/custom";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import { useCallback, useEffect, useMemo, useState } from "react";
import { OwnerMemberRow } from "./row";

interface IOwnerMember {
  _id: string;
  name: string;
  email: string;
  image: string;
  role_owner: boolean;
  role_author: boolean;
  role_comment: boolean;
  created_at: string;
  content_count: number;
}

interface IOwnerMemberTable {
  searchParams: { [key: string]: any };
}
export const OwnerMemberTable = (props: IOwnerMemberTable) => {
  const { searchParams } = props;
  const { page, search } = searchParams;

  const [members, setMembers] = useState<IOwnerMember[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = useMemo(
    () => ({
      skip: (current * 8).toString(),
      take: "8",
      search: search ? search : "",
    }),
    [current, search]
  );

  const fetchMembers = useCallback(() => {
    setLoading(true);
    authApi
      .allMemberByOwner(params)
      .then((res) => {
        const { data, count } = res.data;
        if (data.length !== 0) {
          setMembers(data);
        }

        if (count !== 0) {
          setTotal(count);
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

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  if (loading) {
    return <span>loading</span>;
  }

  return (
    <>
      <div className="rounded my-6 w-full h-full">
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
                  Bài viết
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  Quyền
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-right lg:text-sm text-xs">
                  Ngày tham gia
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-200 text-sm font-light">
            {members.map((m: any) => {
              return (
                <OwnerMemberRow
                  key={m._id}
                  item={m}
                  reload={() => fetchMembers()}
                />
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
              ...searchParams,
              page: p.toString(),
            };
            const url = generateURLWithQueryParams(
              "/owner/member",
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
