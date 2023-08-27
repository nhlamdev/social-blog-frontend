import Image from "next/image";
import { ActionButtonComponent } from "./action-button";
import { ThemeToggleButton } from "@/components/custom/color-mode";
export const ClientNavigator = () => {
  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-2
    bg-slate-200 bg-opacity-40"
    >
      <div>
        <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
      </div>

      <div className="flex flex-row items-center gap-4">
        <ThemeToggleButton />
        <ActionButtonComponent />
      </div>
    </nav>
  );
};
