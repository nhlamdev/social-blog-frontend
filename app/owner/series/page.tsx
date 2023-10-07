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
  const { searchParams } = props;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-200 text-slate-800">
        Danh sách chuỗi bài viết
      </span>

      <OwnerSeriesListView searchParams={searchParams} />

      {/* {series.data.length !== 0 ? (
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
      )} */}

      <SeriesControlDialog />
    </div>
  );
}
