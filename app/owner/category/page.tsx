import { apiCaller } from "@/api";
import { PaginationDirectComponent } from "@/components/custom";
import { CategoryControlDialog } from "@/components/dialog";
import { OwnerCategoryListView } from "@/components/list-view";
import { PageProps } from "@/interface";
import { getCountPage } from "@/utils/global-func";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách thể loại",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function DashboardCategoryPage(props: PageProps) {
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

  const { data: categories } = await apiCaller.categoryApi.get(params);

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-200 text-slate-800">
        Danh sách thể loại
      </span>

      <OwnerCategoryListView categories={categories.data} />

      <PaginationDirectComponent
        current={current + 1}
        total={getCountPage(categories.max, 5)}
        urlDirect={(p) => `/dashboard/category?page=${p}`}
      />
      <CategoryControlDialog />
    </div>
  );
}
