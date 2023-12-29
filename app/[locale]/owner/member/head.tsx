"use client";
import { LanguageButton } from "@/components/custom";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";
import { useClientTranslate } from "@/language/translate-client";
import {
  capitalizeFirstLetter,
  generateURLWithQueryParams,
} from "@/utils/global-func";
import { useDebouncedState } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface OwnerContentsHeadProps {
  searchParams: { [key: string]: string | undefined };
}

export const OwnerMembersHead = (props: OwnerContentsHeadProps) => {
  const { searchParams } = props;

  const pathname = usePathname();
  const translate = useClientTranslate();

  const [search, setSearch] = useDebouncedState(
    searchParams?.search ? searchParams.search : "",
    200
  );
  const router = useRouter();

  useEffect(() => {
    if (search) {
      if (searchParams && searchParams.search !== search) {
        const newSearchParams = {
          ...searchParams,
          page: "1",
          search: search,
        };
        const url = generateURLWithQueryParams(pathname, newSearchParams);

        router.replace(url);
      }
    } else {
      if (searchParams.search) {
        delete searchParams.search;

        const url = generateURLWithQueryParams(pathname, {
          ...searchParams,
          page: "1",
        });

        router.replace(url);
      } else {
        const url = generateURLWithQueryParams(pathname, {
          ...searchParams,
          page: "1",
        });

        router.replace(url);
      }
    }
  }, [pathname, router, search, searchParams]);

  return (
    <div className="flex flex-row w-full items-center justify-between">
      <OwnerMobileNavigation />
      <span
        className="text-center text-lg lg:text-xl hidden sm:inline
      font-semibold text-slate-900 dark:text-slate-200"
      >
        {capitalizeFirstLetter(translate["LIST_MEMBERS"])}
      </span>

      <div className="flex flex-row gap-2 items-center  w-4/5 md:w-2/5">
        <label className="relative block w-full">
          <span className="sr-only">Search</span>

          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
                      border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
                      focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs sm:text-sm"
            placeholder={translate["SEARCH_PLACEHOLDER"]}
            type="text"
            name="search"
            autoComplete="off"
            onChange={(e) => {
              const { value } = e.target;
              setSearch(value);
            }}
          />
        </label>
        <LanguageButton isOnlySmallView={true} />
      </div>
    </div>
  );
};
