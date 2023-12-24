import { clientNavigation } from "@/constant";
import { useClientTranslate } from "@/language/translate-client";
import Link from "next/link";

export const ClientNavigationComponent = () => {
  const translate = useClientTranslate();
  return (
    <div className="flex flex-row items-center gap-4">
      {clientNavigation.map((n) => {
        return (
          <Link href={n.url} key={`client-nav-${n.display}`}>
            <span className="font-semibold text-sm dark:text-slate-100 capitalize">
              {translate[n.display]}
            </span>
          </Link>
        );
      })}
    </div>
  );
};
