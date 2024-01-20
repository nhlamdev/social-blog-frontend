"use client";
import {
  capitalizeFirstLetter,
  generateURLWithQueryParams,
  getCountPage,
} from "@/utils/global-func";
import { useSearchParams } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ContactRow } from "./row";
import { useClientTranslate } from "@/language/translate-client";
import { apiCaller } from "@/api-client";
import { PaginationComponent } from "@/components/custom";

interface IContactTableComponent {
  searchParams: { [key: string]: string | undefined };
}

export const ContactTableComponent = (props: IContactTableComponent) => {
  const { searchParams } = props;

  const [contacts, setContacts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  const translate = useClientTranslate();

  const { page } = searchParams;

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

    return values;
  }, [current]);

  const fetchData = useCallback(() => {
    setLoading(true);
    apiCaller.contactApi
      .contacts(params)
      .then((res) => {
        const { contacts: payload, count } = res.data;
        setTotal(count);
        setContacts(payload);
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
                  {translate["TITLE"]}
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {translate["DESCRIPTION"]}
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {capitalizeFirstLetter(translate["CREATED_AT"])}
                </span>
              </th>
              <th className="py-3 px-6">
                <span className="w-full block text-center lg:text-sm text-xs">
                  {translate["CONTROL"]}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-200 text-sm font-light">
            {contacts.map((s) => {
              return (
                <ContactRow key={s._id} row={s} reload={() => fetchData()} />
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
