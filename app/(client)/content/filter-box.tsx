"use client";
import {
  DropdownCategoryBox,
  SortOptionsComponent,
} from "@/components/drop-down";
import { OutlineInputComponent } from "@/components/common/input";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { useRouter } from "next/navigation";
import { useDeferredValue, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useDebouncedValue } from "@mantine/hooks";
import { AuthBox } from "@/components/custom";
import { clientMappingLanguage } from "@/language/translate-client";
interface FilterContentComponentProps {
  searchParams: { [key: string]: string | undefined };
}
export const FilterContentComponent = (props: FilterContentComponentProps) => {
  const { searchParams } = props;

  const router = useRouter();

  const [openDrawer, setIsOpenDrawer] = useState(true);
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
    <>
      <div className="flex sm:hidden w-full justify-end ">
        <input
          type="checkbox"
          id="drawer-toggle"
          className="relative sr-only peer"
          checked={openDrawer}
          onChange={() => setIsOpenDrawer(!openDrawer)}
        />

        <label
          htmlFor="drawer-toggle"
          className="top-0 left-0 inline-block p-2 transition-all duration-500  shadow-lg
          bg-slate-200 bg-opacity-40 rounded-md cursor-pointer select-none"
        >
          <FaFilter className="font-sm text-slate-800" />
        </label>

        <div
          className={`fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform ${
            openDrawer ? "-translate-x-full" : "peer-checked:translate-x-0"
          } bg-white shadow-lg`}
        >
          <div className="px-2 py-4 h-full flex flex-col  bg-slate-50">
            <div className="pb-4">
              <span className="font-bold text-slate-800 dark:text-slate-200">
                Bộ lọc
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <OutlineInputComponent
                txt={search}
                change={(txt) => setSearch(txt)}
                placeholder={clientMappingLanguage("SEARCH_PLACEHOLDER")}
              />

              <DropdownCategoryBox
                value={category}
                change={(txt) => {
                  setCategory(txt);
                }}
              />
              <SortOptionsComponent
                sortCase={sortCase}
                change={(txt) => setSortCase(txt)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex flex-row items-center justify-end w-full h-fit gap-4">
        <OutlineInputComponent
          txt={search}
          change={(txt) => setSearch(txt)}
          placeholder={clientMappingLanguage("SEARCH_PLACEHOLDER")}
        />

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
    </>
  );
};
