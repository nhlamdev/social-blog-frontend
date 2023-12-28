import { LanguageButton } from "@/components/custom";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";
import { HistoryLoginTable } from "@/components/table/history-login";

export default function SessionPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <div className="flex flex-row justify-between w-full items-center">
        <OwnerMobileNavigation />

        <div className="flex flex-row gap-4 items-center">
          <span className="text-md sm:text-xl font-semibold dark:text-slate-200 text-slate-800">
            Phiên đăng nhập
          </span>
          <LanguageButton isOnlySmallView={true} />
        </div>
      </div>

      <HistoryLoginTable />
    </div>
  );
}
