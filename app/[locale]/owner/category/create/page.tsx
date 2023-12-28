import { OwnerCategoryAction } from "@/components/form";
import { serverTranslate } from "@/language/translate-server";
import { capitalizeFirstLetter } from "@/utils/global-func";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function CreateCategoryPage() {
  const translate = serverTranslate();

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <div className="flex flex-row gap-4 w-full">
        <Link href="/owner/category">
          <BsFillArrowLeftCircleFill
            className="hover:scale-110 text-slate-800 dark:text-slate-100 text-2xl"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span className="text-center text-md md:text-xl font-semibold text-slate-900 dark:text-slate-200">
          {capitalizeFirstLetter(translate["CREATE_CATEGORY"])}
        </span>
      </div>

      <OwnerCategoryAction />
    </div>
  );
}
