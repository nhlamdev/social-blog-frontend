import { apiCaller } from "@/api";
import {
  EmptyDataComponent,
  PaginationDirectComponent,
} from "@/components/custom";
import { CategoryControlDialog } from "@/components/dialog";
import { OwnerCategoryListView } from "@/components/list-view";
import { PageProps } from "@/interface";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Danh sách thể loại",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

const backend = process.env.SERVICE_PORT;

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

  const url = generateURLWithQueryParams(
    `http://localhost:${backend}/category`,
    params
  );

  const { data: categories } = await axios.get(url, {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-200 text-slate-800">
        Danh sách thể loại
      </span>

      {categories.data.length !== 0 ? (
        <OwnerCategoryListView categories={categories.data} />
      ) : (
        <EmptyDataComponent />
      )}

      {categories.max !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(categories.max, 5)}
          urlDirect={(p) => `/owner/category?page=${p}`}
        />
      ) : (
        <></>
      )}

      <CategoryControlDialog />
    </div>
  );
}
