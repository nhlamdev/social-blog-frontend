"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedState } from "@mantine/hooks";
import { useRouter, usePathname } from "next/navigation";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { GiHamburgerMenu } from "react-icons/gi";
import { OwnerMobileNavigation } from "@/components/navigation/owner-mobile";

interface OwnerContentsHeadProps {
  searchParams: { [key: string]: string | undefined };
}

export const OwnerContentsHead = (props: OwnerContentsHeadProps) => {
  const { searchParams } = props;

  const pathname = usePathname();

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
  }, [pathname, router, search]);

  return (
    <div className="flex flex-row w-full items-center justify-between">
      <OwnerMobileNavigation />
      <span
        className="text-center text-lg lg:text-xl hidden sm:inline
      font-semibold text-slate-800 dark:text-slate-200"
      >
        Danh sách bài viết
      </span>

      <label className="relative block w-4/5 md:w-2/5">
        <span className="sr-only">Search</span>

        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
          border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none 
          focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs sm:text-sm"
          placeholder="Nhập từ khoá..."
          type="text"
          name="search"
          autoComplete="off"
          onChange={(e) => {
            const { value } = e.target;
            setSearch(value);
          }}
        />
      </label>
    </div>
  );
};