"use client";
import { OutlineInputComponent } from "@/components/common";
import {
  DropdownCategoryBox,
  SortOptionsComponent,
} from "@/components/drop-down";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IClientContentFilterDesktopComponent {
  searchParams: { [key: string]: string | undefined };
}

export const ClientContentFilterDesktopComponent = (
  props: IClientContentFilterDesktopComponent
) => {
  const { searchParams } = props;

  const router = useRouter();

  const [category, setCategory] = useState<string>(
    searchParams.category ? searchParams.category : ""
  );
  const [sortCase, setSortCase] = useState<
    "NAME_ASC" | "NAME_DESC" | "TIME_ASC" | "TIME_DESC"
  >(searchParams.sortCase ? (searchParams.sortCase as any) : "TIME_DESC");

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

    if (category) {
      filteredNullParams = { ...filteredNullParams, category: category };
    } else {
      delete filteredNullParams.category;
    }

    if (
      sortCase &&
      ["NAME_ASC", "NAME_DESC", "TIME_ASC", "TIME_DESC"].includes(sortCase)
    ) {
      filteredNullParams = { ...filteredNullParams, sortCase: sortCase };
    }

    const url = generateURLWithQueryParams("/content", filteredNullParams);
    router.replace(url);
  }, [category, debounced, router, sortCase]);
  return (
    <div className="hidden sm:flex flex-row items-center justify-end w-full h-fit gap-4">
      <OutlineInputComponent txt={search} change={(txt) => setSearch(txt)} />

      <DropdownCategoryBox
        value={category}
        change={(txt) => {
          if (category === txt) {
            setCategory("");
          } else {
            setCategory(txt);
          }
        }}
      />
      <SortOptionsComponent
        sortCase={sortCase}
        change={(txt) => setSortCase(txt)}
      />
    </div>
  );
};
