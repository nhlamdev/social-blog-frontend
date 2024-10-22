"use client";
import { apiCaller } from "@/api-client";
import { useClientTranslate } from "@/language/translate-client";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface DropdownCategoryBoxProps {
  value: string | null;
  change: (txt: string) => void;
}

export const DropdownCategoryBox = (props: DropdownCategoryBoxProps) => {
  const { change, value } = props;

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  const translate = useClientTranslate();

  useEffect(() => {
    apiCaller.categoryApi.categories().then((res) => {
      const { data } = res;
      setCategories(data);
    });
  }, []);

  const generateTitle = () => {
    const check = categories.filter((c: any) => c._id === value);
    if (!check || check.length === 0) {
      return translate["CHOOSE_CATEGORIES"];
      // return {clientL} "Hãy chọn một thể loại";
    } else {
      return check[0].title;
    }
  };

  return (
    <div className="flex flex-row items-center relative">
      <div className="w-full cursor-pointer" onClick={() => setOpen(!open)}>
        <div
          className="my-2 p-1 bg-white flex border border-gray-200 rounded 
         flex-row items-center gap-2"
        >
          <div className="flex flex-auto flex-wrap"></div>
          <span className="p-1 px-2 appearance-none outline-none w-full text-gray-800 text-sm">
            {generateTitle()}
          </span>
          <IoIosCloseCircle
            className="text-3xl"
            style={{ display: Boolean(value) ? "block" : "none" }}
            onClick={() => change("")}
          />
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

      {open ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
          }}
          onClick={() => setOpen(false)}
        />
      ) : (
        <></>
      )}
      {/* ---------------- */}
      <div
        style={{ display: open ? "block" : "none" }}
        className="top-full absolute shadow bg-white top-100 z-40 w-full left-0 rounded max-h-select overflow-y-auto "
      >
        <div className="max-h-64">
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
