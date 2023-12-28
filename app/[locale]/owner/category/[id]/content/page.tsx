import { PageProps } from "@/interface";
import { notFound } from "next/navigation";
import { OwnerListContentInCategory } from "./list-data";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import { serverTranslate } from "@/language/translate-server";
import { capitalizeFirstLetter } from "@/utils/global-func";

export default function ContentInCategoryPage(props: PageProps) {
  const { searchParams, params: queryParams } = props;
  const translate = serverTranslate();
  const { id: categoryId } = queryParams;

  if (!categoryId) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative">
      <div className="flex flex-row gap-4 w-full">
        <Link href="/owner/category">
          <BsFillArrowLeftCircleFill
            className="hover:scale-110 text-slate-800 dark:text-slate-100 text-2xl"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span className="text-center text-md md:text-xl font-semibold text-slate-900 dark:text-slate-200">
          {capitalizeFirstLetter(translate["LIST_CONTENT"])}
        </span>
      </div>

      <OwnerListContentInCategory
        categoryId={categoryId}
        searchParams={searchParams}
      />
    </div>
  );
}
