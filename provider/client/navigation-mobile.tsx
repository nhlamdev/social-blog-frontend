import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";

export const ClientNavigatorMobile = () => {
  return (
    <nav
      className="w-screen flex flex-row items-center justify-between px-2
  bg-slate-200 bg-opacity-40 md:hidden "
    >
      <Link href="/">
        <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
      </Link>

      <BiMenu className="text-2xl" />
    </nav>
  );
};
