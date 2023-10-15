import { PageProps } from "@/interface";
import { notFound } from "next/navigation";
import { OwnerListContentInSeries } from "./list-data";

export default async function ContentInSeriesPage(props: PageProps) {
  const { searchParams, params: queryParams } = props;

  const { id: seriesId } = queryParams;

  if (!seriesId) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Danh sách bài viết
      </span>

      <OwnerListContentInSeries
        seriesId={seriesId}
        searchParams={searchParams}
      />
    </div>
  );
}
