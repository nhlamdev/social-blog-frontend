import { HomeClientSlider } from "@/components/page/home-page";
import Image from "next/image";

export default function ClientContentsPage() {
  return (
    <main className="min-h-screen flex flex-col w-full tems-center gap-4 ">
      <header className="px-14 py-4">
        <HomeClientSlider />
      </header>
    </main>
  );
}
