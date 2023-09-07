import Image from "next/image";
import { ActionButtonComponent } from "./action-button";
import { ThemeToggleButton } from "@/components/custom/color-mode";
import axios from "axios";
import { cookies } from "next/headers";
import { NavInfoBox } from "./infor-box";

const backend = process.env.SERVICE_PORT;
export const ClientNavigator = async () => {
  let profile;

  try {
    const { data } = await axios.get(`http://localhost:${backend}/profile`, {
      headers: {
        Cookie: cookies().toString(),
      },
    });

    profile = data;
  } catch (e) {}

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

        {profile ? <NavInfoBox profile={profile} /> : <ActionButtonComponent />}
      </div>
    </nav>
  );
};
