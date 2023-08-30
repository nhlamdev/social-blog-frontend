import { PageProps } from "@/interface";
import { Metadata } from "next";
// import { callerInstance } from "@/api";
export const metadata: Metadata = {
  title: "Danh sách thể loại",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function DashboardCategoryPage(props: PageProps) {
  const { page } = props.searchParams;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-200 text-slate-800">
        Danh sách thể loại
      </span>
    </div>
  );
}
