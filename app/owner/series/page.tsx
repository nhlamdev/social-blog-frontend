import { OwnerSeriesListView } from "@/components/list-view";
import { PageProps } from "@/interface";
import { Metadata } from "next";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";

export const metadata: Metadata = {
  title: "Danh sách chuỗi bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function OwnerSeriesPage(props: PageProps) {
  const { searchParams } = props;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-100 text-slate-900">
        Danh sách chuỗi bài viết
      </span>

      <OwnerSeriesListView searchParams={searchParams} />

      <Link
        href="/owner/series/create"
        className="block fixed right-8 bottom-8 cursor-pointer"
      >
        <IoIosCreate
          className="text-slate-800 dark:text-slate-100"
          style={{
            fontSize: "36px",
          }}
        />
      </Link>
    </div>
  );
}
