import { LanguageButton } from "@/components/custom";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";
import { ContactTableComponent } from "@/components/table/client-contact";
import { PageProps } from "@/interface";
import { serverTranslate } from "@/language/translate-server";
import { capitalizeFirstLetter } from "@/utils/global-func";

export default function ContactPage({ searchParams }: PageProps) {
  const translate = serverTranslate();
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <div className="flex flex-row justify-between w-full items-center">
        <OwnerMobileNavigation />
        <div className="flex flex-row gap-4 items-center">
          <span className="text-md sm:text-xl font-semibold dark:text-slate-200 text-slate-800">
            {capitalizeFirstLetter(translate["LIST_CONTACT"])}
          </span>
          <LanguageButton isOnlySmallView={true} />
        </div>
      </div>
      <ContactTableComponent searchParams={searchParams} />
    </div>
  );
}
