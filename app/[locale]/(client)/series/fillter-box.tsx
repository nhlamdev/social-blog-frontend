"use client";
import { OutlineInputComponent } from "@/components/common/input";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface ClientSeriesSearchBoxProps {
  searchParams: { [key: string]: string | undefined };
}
export const ClientSeriesSearchBox = (props: ClientSeriesSearchBoxProps) => {
  const { searchParams } = props;

  const router = useRouter();
  const [search, setSearch] = useState<string>(
    searchParams.search ? searchParams.search : ""
  );
  const [debounced] = useDebouncedValue(search, 200);

  useEffect(() => {
    let filteredNullParams: { [key: string]: any } = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    );

    if (debounced) {
      filteredNullParams = { ...filteredNullParams, search: debounced };
    } else {
      delete filteredNullParams.search;
    }

    const url = generateURLWithQueryParams("series", filteredNullParams);
    router.replace(url);
  }, [, debounced, router, searchParams]);

  return (
    <div className="w-full sm:w-4/5 md:w-3/5">
      <OutlineInputComponent txt={search} change={(txt) => setSearch(txt)} />
    </div>
  );
};
