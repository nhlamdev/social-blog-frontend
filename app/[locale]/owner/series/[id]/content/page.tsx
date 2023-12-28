import { PageProps } from "@/interface";
import { notFound } from "next/navigation";
import { OwnerListContentInSeries } from "./list-data";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/utils/global-func";
import { serverTranslate } from "@/language/translate-server";

export default async function ContentInSeriesPage(props: PageProps) {
  const { searchParams, params: queryParams } = props;

  const translate = serverTranslate();
  const { id: seriesId } = queryParams;

  if (!seriesId) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative">
      <div className="flex flex-row gap-4 w-full">
        <Link href="/owner/series">
          <BsFillArrowLeftCircleFill
            className="hover:scale-110 text-slate-800 dark:text-slate-100 text-2xl"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span className="text-center text-md md:text-xl font-semibold text-slate-900 dark:text-slate-200">
          {capitalizeFirstLetter(translate["LIST_CONTENT"])}
        </span>
      </div>

      <OwnerListContentInSeries
        seriesId={seriesId}
        searchParams={searchParams}
      />
    </div>
  );
}
