"use client";
import { OutlineInputComponent } from "@/components/common";
import {
  DropdownCategoryBox,
  SortOptionsComponent,
} from "@/components/drop-down";
import { useClientTranslate } from "@/language/translate-client";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

interface IClientContentFilterMobileComponent {
  searchParams: { [key: string]: string | undefined };
}

export const ClientContentFilterMobileComponent = (
  props: IClientContentFilterMobileComponent
) => {
  const { searchParams } = props;

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const translate = useClientTranslate();

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
    <div className="w-full flex flex-row justify-end sm:hidden ">
      <div className="p-2 bg-cyan-200 bg-opacity-40 rounded-lg shadow-lg cursor-pointer">
        <FaFilter
          className="font-sm text-slate-800"
          onClick={() => setOpen(true)}
        />
      </div>

      {open ? (
        <div
          className="fixed left-0 top-0 w-screen h-screen bg-slate-400 bg-opacity-40"
          style={{ zIndex: 10 }}
        >
          <div
            className="w-64 flex flex-col gap-4 right-0 top-0 bottom-0 absolute p-2 
            bg-slate-50"
          >
            <div className="flex flex-row justify-between items-center">
              <span className="text-md font-semibold">Bộ lọc</span>
              <AiFillCloseCircle
                className="text-red-500 text-2xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <OutlineInputComponent
              txt={search}
              change={(txt) => setSearch(txt)}
              placeholder={translate["SEARCH_PLACEHOLDER"]}
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
