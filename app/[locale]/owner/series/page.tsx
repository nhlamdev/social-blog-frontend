import { CreateActionButton } from "@/components/custom";
import { OwnerSeriesListView } from "@/components/list-view";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";
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
      <div className="flex flex-row justify-between w-full items-center">
        <OwnerMobileNavigation />
        <span className="text-md sm:text-xl font-semibold dark:text-slate-200 text-slate-800">
          Danh sách chuỗi bài viết
        </span>
      </div>

      <OwnerSeriesListView searchParams={searchParams} />

      <CreateActionButton direct="/owner/series/create" />
    </div>
  );
}