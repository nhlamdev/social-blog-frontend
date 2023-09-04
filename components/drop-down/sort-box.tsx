import { useState } from "react";
import { PiSortDescendingBold } from "react-icons/pi";
import { TbSortDescending } from "react-icons/tb";

interface SortOptionsComponentProps {
  sortCase: "NAME_ASC" | "NAME_DESC" | "TIME_ASC" | "TIME_DESC";
  change: (txt: "NAME_ASC" | "NAME_DESC" | "TIME_ASC" | "TIME_DESC") => void;
}
export const SortOptionsComponent = (props: SortOptionsComponentProps) => {
  const { change, sortCase } = props;
  const [open, setOpen] = useState(false);
  const data = [
    { key: "NAME_ASC", value: "Tên A => Z", icon: PiSortDescendingBold },
    { key: "NAME_DESC", value: "Tên Z => A", icon: TbSortDescending },
    { key: "TIME_ASC", value: "Cũ nhất", icon: TbSortDescending },
    { key: "TIME_DESC", value: "Mới nhất", icon: PiSortDescendingBold },
  ];

  const genegrateTitle = () => {
    const check = data.filter((c) => c.key === sortCase);
    if (!check || check.length === 0) {
      return "Bộ lọc";
    } else {
      return check[0].value;
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
          <div className="flex flex-auto flex-wrap"></div>
          <span className="p-1 px-2 appearance-none outline-none w-full text-gray-800 text-sm">
            {genegrateTitle()}
          </span>
          <div className="text-gray-800 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 rotate-">
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

      {/* ----------------- */}
      <div
        style={{ display: open ? "block" : "none", zIndex: 3 }}
        className="top-full absolute shadow bg-white top-100 z-40 w-full left-0 rounded max-h-select overflow-y-auto "
      >
        {data.map((s: any, key) => {
          return (
            <div
              key={`key-sort-${key}`}
              className="flex flex-col w-full"
              onClick={() => {
                change(s.key);
                setOpen(false);
              }}
            >
              <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                  <div className="w-full items-center flex">
                    <div className="mx-2">{s.value}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
