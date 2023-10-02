import {
  EmptyDataComponent,
  PaginationDirectComponent,
} from "@/components/custom";
import { SeriesControlDialog } from "@/components/dialog";
import { OwnerSeriesListView } from "@/components/list-view";
import { PageProps } from "@/interface";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Danh sách chuỗi bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

const backend = process.env.SERVICE_PORT;

export default async function OwnerSeriesPage(props: PageProps) {
  const { page, search } = props.searchParams;

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = {
    skip: (current * 5).toString(),
    take: "5",
    search: search ? search : "",
  };

  const url = generateURLWithQueryParams(
    `http://localhost:${backend}/series/owner`,
    params
  );

  const { data: series } = await axios.get(url, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  if (!series) {
    return <></>;
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-200 text-slate-800">
        Danh sách chuỗi bài viết
      </span>

      {series.data.length !== 0 ? (
        <OwnerSeriesListView series={series.data} />
      ) : (
        <EmptyDataComponent />
      )}

      {series.max !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(series.max, 5)}
          urlDirect={(p) => `/owner/series?page=${p}`}
        />
      ) : (
        <></>
      )}

      <SeriesControlDialog />
    </div>
  );
}
