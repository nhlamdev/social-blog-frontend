import { OwnerCategoryListView } from "@/components/list-view";
import { PageProps } from "@/interface";
import { Metadata } from "next";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";

export const metadata: Metadata = {
  title: "Danh sách thể loại",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function DashboardCategoryPage(props: PageProps) {
  const { searchParams } = props;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-200 text-slate-800">
        Danh sách thể loại
      </span>

      <OwnerCategoryListView searchParams={searchParams} />

      <Link
        href="/owner/category/create"
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
