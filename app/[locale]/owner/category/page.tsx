import { CreateActionButton, LanguageButton } from "@/components/custom";
import { OwnerCategoryListView } from "@/components/list-view";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";
import { PageProps } from "@/interface";
import { useClientTranslate } from "@/language/translate-client";
import { serverTranslate } from "@/language/translate-server";
import { capitalizeFirstLetter } from "@/utils/global-func";
import { Metadata } from "next";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";

export const metadata: Metadata = {
  title: "Danh sách thể loại",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function DashboardCategoryPage(props: PageProps) {
  const { searchParams } = props;
  const translate = serverTranslate();

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <div className="flex flex-row justify-between w-full items-center ">
        <OwnerMobileNavigation />

        <div className="flex flex-row gap-4 items-center">
          <span className="text-md sm:text-xl font-semibold dark:text-slate-200 text-slate-800">
            {capitalizeFirstLetter(translate["LIST_CATEGORIES"])}
          </span>
          <LanguageButton isOnlySmallView={true} />
        </div>
      </div>

      <OwnerCategoryListView searchParams={searchParams} />

      <CreateActionButton direct="/owner/category/create" />
    </div>
  );
}
