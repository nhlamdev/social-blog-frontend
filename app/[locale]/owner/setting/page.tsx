import { LanguageButton } from "@/components/custom";
import { ProfileActionComponent } from "@/components/form";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";

export default function OwnerSettingPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <div className="flex flex-row justify-between w-full items-center">
        <OwnerMobileNavigation />

        <div className="flex flex-row gap-4 items-center">
          <span className="text-md sm:text-xl font-semibold dark:text-slate-200 text-slate-800">
            Thông tin cá nhân
          </span>
          <LanguageButton isOnlySmallView={true} />
        </div>
      </div>

      <div className="flex flex-1 w-full items-center justify-center ">
        <ProfileActionComponent />
      </div>
    </div>
  );
}
