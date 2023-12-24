import { ProfileActionComponent } from "@/components/form";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";

export default function OwnerSettingPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <div className="flex flex-row justify-between w-full items-center">
        <OwnerMobileNavigation />
        <span className="text:md md:text-xl font-semibold dark:text-slate-200 text-slate-800">
          Thông tin cá nhân
        </span>
      </div>

      <div className="flex flex-1 w-full items-center justify-center ">
        <ProfileActionComponent />
      </div>
    </div>
  );
}
