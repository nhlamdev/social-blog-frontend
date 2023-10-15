import { PageProps } from "@/interface";
import { notFound } from "next/navigation";
import { OwnerListContentInCategory } from "./list-data";

export default function ContentInCategoryPage(props: PageProps) {
  const { searchParams, params: queryParams } = props;

  const { id: categoryId } = queryParams;

  if (!categoryId) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Danh sách bài viết
      </span>

      <OwnerListContentInCategory
        categoryId={categoryId}
        searchParams={searchParams}
      />
    </div>
  );
}
