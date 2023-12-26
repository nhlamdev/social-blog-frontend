import { LanguageButton } from "@/components/custom";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";
import { ContactTableComponent } from "@/components/table/client-contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <div className="flex flex-row justify-between w-full items-center">
        <OwnerMobileNavigation />
        <div className="flex flex-row gap-4 items-center">
          <span className="text-md sm:text-xl font-semibold dark:text-slate-200 text-slate-800">
            Danh sách liên hệ
          </span>
          <LanguageButton />
        </div>
      </div>
      <ContactTableComponent />
    </div>
  );
}
