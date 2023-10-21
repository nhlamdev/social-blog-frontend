import { OwnerProviderComponent } from "@/provider";
import Link from "next/link";

interface OwnerLayoutProps {
  children: React.ReactNode;
}

export default async function OwnerLayout(props: OwnerLayoutProps) {
  const { children } = props;

  return (
    <>
      <main className="md:hidden flex flex-col items-center justify-center h-screen w-screen gap-2">
        <span className="text-xl font-semibold">
          Kích thươc màn hình hiện tại không hỗ trợ.
        </span>

        <Link href="/" className="btn px-4 py-2 bg-stone-400 cursor-pointer">
          <span className="select-none text-slate-100">Về trang chủ</span>
        </Link>
      </main>

      <main
        className="min-h-screen bg-gradient-light dark:bg-gradient-dark hidden 
        md:flex flex-row"
      >
        <OwnerProviderComponent>{children}</OwnerProviderComponent>
      </main>
    </>
  );
}
