import { PageProps } from "@/interface";
import axios from "axios";
import { Metadata } from "next";
import { ClientSeriesSearchBox } from "./fillter-box";
import { ClientListSeries } from "@/components/list-view";
const backend = process.env.SERVICE_PORT;

export const metadata: Metadata = {
  title: "Danh sách các thể loại",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function ClientSeriesPage(props: PageProps) {
  const { searchParams } = props;
  const { page } = searchParams;
  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const { data: series } = await axios.get(
    `http://localhost:${backend}/series`,
    {
      params: { ...searchParams, skip: (current * 6).toString(), take: "6" },
    }
  );

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <ClientSeriesSearchBox searchParams={searchParams} />
      <ClientListSeries series={series} searchParams={searchParams} />
    </div>
  );
}
