"use client";
import { authApi } from "@/api-client/auth";
import {
  capitalizeFirstLetter,
  generateURLWithQueryParams,
  getCountPage,
} from "@/utils/global-func";
import { useCallback, useEffect, useMemo, useState } from "react";
import { OwnerMemberRow } from "./row";
import { useClientTranslate } from "@/language/translate-client";
import { apiCaller } from "@/api-client";
import { PaginationComponent } from "@/components/custom";

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

  const translate = useClientTranslate();

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

  const fetchMembers = useCallback(async () => {
    setLoading(true);

    try {
      const {
        data: { members: payload, count },
      } = await apiCaller.memberApi.members(params);

      setMembers(payload);
      setTotal(count);
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
  }, [params]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

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
                  {capitalizeFirstLetter(translate["INFORMATION"])}
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {capitalizeFirstLetter(translate["CONTENT"])}
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {capitalizeFirstLetter(translate["ROLE"])}
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-right lg:text-sm text-xs">
                  {capitalizeFirstLetter(translate["JOIN_AT"])}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-200 text-sm font-light">
            {members.map((m: any) => {
              return (
                <OwnerMemberRow
                  key={m._id}
                  member={m}
                  reload={() => fetchMembers()}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {getCountPage(total, 8) > 1 ? (
        <PaginationComponent
          searchParams={searchParams}
          currentPage={current + 1}
          maxPage={getCountPage(total, 8)}
          queryName="page"
        />
      ) : (
        <></>
      )}
    </>
  );
};
