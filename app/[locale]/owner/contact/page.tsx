import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";
import { ContactTableComponent } from "@/components/table/client-contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <div className="flex flex-row justify-between w-full items-center">
        <OwnerMobileNavigation />
        <span className="text-sm md:text-xl font-semibold dark:text-slate-200 text-slate-800">
          Phiên đăng nhập
        </span>
      </div>
      <ContactTableComponent />
    </div>
  );
}
