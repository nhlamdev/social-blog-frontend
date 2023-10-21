import { IProfile } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { navigation_mock } from "./nav.mock";

interface IOwnerNavigationMobile {
  profile: IProfile;
}
export const OwnerNavigationMobile = (props: IOwnerNavigationMobile) => {
  return (
    <nav className="lg:hidden flex flex-col gap-2 m-1 h-fit items-center">
      <Link href="/">
        <Image
          src="/logo/logo.png"
          className="drop-shadow-md"
          width={40}
          height={40}
          alt="logo"
        />
      </Link>
      {navigation_mock.map((v, k) => {
        return (
          <Link
            href={v.url}
            key={`item-navigation-d-${k}`}
            className="bg-slate-200 bg-opacity-40 p-2 rounded-full"
          >
            <v.icon key={k} className="text-lg" />
          </Link>
        );
      })}
    </nav>
  );
};
