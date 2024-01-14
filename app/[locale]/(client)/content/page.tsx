import { ClientContentFilter } from "@/components/custom/content-filter";
import { ClientContentListView } from "@/components/list-view";
import { PageProps } from "@/interface";
import { getDateTime } from "@/utils/global-func";
import axios from "axios";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { IoMdTimer } from "react-icons/io";

const backend = process.env.SERVICE_PORT;

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function ContentPage(props: PageProps) {
  const { searchParams } = props;

  const { page, series } = searchParams;

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  let seriesData;

  if (series) {
    try {
      const { data } = await axios.get(
        `http://localhost:${backend}/series/by-id/${series}`
      );
      seriesData = data;
    } catch {
      notFound();
    }
  }

  const {
    data: { contents, count },
  } = await axios.get(`http://localhost:${backend}/content/public`, {
    params: { ...searchParams, skip: (current * 6).toString(), take: "6" },
  });

  return (
    <div
      className="min-h-screen flex flex-col w-full p-2 md:p-4 items-center gap-4 relative 
    justify-between"
    >
      <ClientContentFilter searchParams={searchParams} />

      {seriesData ? (
        <div
          className="flex flex-col gap-2 md:w-4/5 lg:w-3/5 w-full bg-slate-100 bg-opacity-40 shadow-sm 
          rounded-md p-4"
        >
          <span className="text-md font-semibold dark:text-slate-100">
            {seriesData.title}
          </span>

          <span className="text-sm font-normal dark:text-slate-100">
            {seriesData.summary}
          </span>

          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col">
              <span className="text-xs font-semibold dark:text-slate-100">
                {seriesData.created_by.name}
              </span>
              <span className="text-[10px] font-light dark:text-slate-100">
                {seriesData.created_by.email}
              </span>
            </div>

            <div
              className="h-4 bg-slate-600 dark:bg-slate-200 mx-1"
              style={{ width: "1px" }}
            />

            <div className="flex flex-row items-center gap-2">
              <IoMdTimer className="text-sm dark:text-slate-100" />
              <span className="text-xs font-light dark:text-slate-100">
                {getDateTime(seriesData.created_at)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <ClientContentListView
        contents={contents}
        count={count}
        searchParams={searchParams}
      />
    </div>
  );
}
