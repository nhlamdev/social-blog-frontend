"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedState } from "@mantine/hooks";
import { useRouter, usePathname } from "next/navigation";
import { generateURLWithQueryParams } from "@/utils/global-func";

interface OwnerContentsHeadProps {
  searchParams: { [key: string]: string | undefined };
}

export const OwnerMembersHead = (props: OwnerContentsHeadProps) => {
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
  }, [pathname, router, search, searchParams]);

  return (
    <div className="flex flex-row w-full items-center justify-between">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Danh sách thành viên
      </span>

      <label className="relative block w-2/5">
        <span className="sr-only">Search</span>

        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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