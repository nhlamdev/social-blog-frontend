import { PageProps } from "@/interface";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { FilterContentComponent } from "./filter-box";
import { ClientContentListView } from "@/components/list-view";
import { getDateTime } from "@/utils/global-func";
import Image from "next/image";
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
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative">
      <FilterContentComponent searchParams={searchParams} />

      {seriesData ? (
        <div
          className="flex flex-col gap-2 md:w-4/5 lg:w-3/5 w-full bg-slate-100 bg-opacity-40 shadow-sm 
          rounded-md px-4 py-2"
        >
          <span className="text-md font-semibold">{seriesData.title}</span>
          <span className="text-sm font-normal">{seriesData.summary}</span>

          <div className="flex flex-row gap-2 items-center">
            <div>
              <Image
                src={seriesData.created_by.image}
                className="rounded-full shadow-md"
                width={25}
                height={25}
                alt="photo"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                {seriesData.created_by.name}
              </span>
              <span className="text-xs font-light">
                {seriesData.created_by.email}
              </span>
            </div>

            <div
              style={{ width: "2px", height: "20px" }}
              className="bg-slate-600"
            />

            <span className="text-xs font-light">
              {getDateTime(seriesData.created_at)}
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}

      <ClientContentListView contents={contents} searchParams={searchParams} />
    </div>
  );
}
