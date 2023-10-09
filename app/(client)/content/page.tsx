import { PageProps } from "@/interface";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { FilterContentComponent } from "./filter-box";
import { ClientContentListView } from "@/components/list-view";
import { getDateTime } from "@/utils/global-func";
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

  const { data: contents } = await axios.get(
    `http://localhost:${backend}/content`,
    {
      params: { ...searchParams, skip: (current * 6).toString(), take: "6" },
    }
  );

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative ">
      <FilterContentComponent searchParams={searchParams} />

      {seriesData ? (
        <div
          className="flex flex-col gap-2 w-3/5 bg-slate-100 bg-opacity-40 shadow-sm 
          border-2 border-solid border-slate-400 rounded-lg px-4 py-2"
        >
          <span className="text-sm font-semibold">{seriesData.title}</span>
          <span className="text-xs font-normal">{seriesData.summary}</span>
          <span className="text-xs font-light">
            {getDateTime(seriesData.created_at)}
          </span>
        </div>
      ) : (
        <></>
      )}

      <ClientContentListView contents={contents} searchParams={searchParams} />
    </div>
  );
}
