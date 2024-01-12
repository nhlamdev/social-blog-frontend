"use client";
import { apiCaller } from "@/api";
import { useClientTranslate } from "@/language/translate-client";
import { capitalizeFirstLetter } from "@/utils/global-func";
import { useCallback, useEffect, useState } from "react";

interface ContentCategoryBoxProps {
  value: string | null;
  change: (txt: string) => void;
}

export const ContentCategoryBox = (props: ContentCategoryBoxProps) => {
  const { change, value } = props;

  const translate = useClientTranslate();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  const fetchCategories = useCallback(async () => {
    try {
      const { data: categories } = await apiCaller.categoryApi.all();

      setCategories(categories);
    } catch (error: any) {
      if (Array.isArray(error?.response?.data?.message)) {
        error?.response?.data?.message.forEach((item: any) => {
          console.log(item);
        });
      } else {
        console.log(
          error?.response ? error.response.data?.message : error.message
        );
      }
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const generateTitle = () => {
    const check = categories.filter((c: any) => c._id === value);
    if (!check || check.length === 0) {
      return capitalizeFirstLetter(translate["CHOOSE_CATEGORIES"]);
    } else {
      return check[0].title;
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
          <div className="flex flex-auto flex-wrap"></div>
          <span className="p-1 px-2 appearance-none outline-none w-full text-gray-800 text-sm">
            {generateTitle()}
          </span>
          <div className="text-gray-800 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-up w-4 h-4"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </div>
      </div>
      {/* ----------------- */}
      <div
        style={{ display: open ? "block" : "none" }}
        className="top-full absolute shadow bg-white top-100 z-40 w-full left-0 rounded max-h-select overflow-y-auto "
      >
        <div className="max-h-72 overflow-auto">
          {categories ? (
            categories.map((c: any) => {
              return (
                <div
                  key={c._id}
                  className="flex flex-col w-full"
                  onClick={() => {
                    change(c._id);
                    setOpen(false);
                  }}
                >
                  <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                      <div className="w-full items-center flex">
                        <div className="mx-2   ">{c.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
