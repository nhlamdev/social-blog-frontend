import { clientNavigation } from "@/constant";
import { clientMappingLanguage } from "@/language/translate-client";
import Link from "next/link";

export const DesktopNavigationComponent = () => {
  return (
    <>
      {clientNavigation.map((nav) => {
        return (
          <Link href={nav.url} key={`client-nav-${nav.display}`}>
            <span className="dark:text-slate-100 text-slate-900 capitalize">
              {clientMappingLanguage(nav.display)}
            </span>
          </Link>
        );
      })}
    </>
  );
};
