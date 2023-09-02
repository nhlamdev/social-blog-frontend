import { apiCaller } from "@/api";
import { PaginationDirectComponent } from "@/components/custom";
import { PageProps } from "@/interface";
import { getCountPage, getDateTime } from "@/utils/global-func";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { OwnerContentRow } from "./row";

const backend = process.env.SERVICE_PORT;

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function OwnerContentsPage(props: PageProps) {
  const { page, search } = props.searchParams;

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = {
    skip: (current * 8).toString(),
    take: "8",
    search: search ? search : "",
  };

  let contents;

  try {
    const { data } = await axios.get(
      `http://localhost:${backend}/content/owner`,
      {
        headers: {
          Cookie: cookies().toString(),
        },
      }
    );

    contents = data;
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

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <div className="flex flex-row w-full items-center justify-between">
        <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
          Danh sách bài viết
        </span>

        <label className="relative block w-2/5">
          <span className="sr-only">Search</span>

          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Nhập từ khoá..."
            type="text"
            name="search"
            autoComplete="off"
          />
        </label>
      </div>

      <div className="rounded my-6 w-full h-full">
        <table className="bg-slate-100 bg-opacity-20 min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-slate-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Tiêu đề</th>
              <th className="py-3 px-6 text-center">Ngày tạo</th>
              <th className="py-3 px-6 text-center">Công khai</th>
              <th className="py-3 px-6 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-200 text-sm font-light">
            {contents?.data.map((c: any) => {
              return <OwnerContentRow key={c._id} item={c} />;
            })}
          </tbody>
        </table>
      </div>

      {contents?.max !== 0 ? (
        <>
          <PaginationDirectComponent
            current={current + 1}
            total={getCountPage(contents.max, 8)}
            urlDirect={(p) => `/dashboard/content?page=${p}`}
          />
        </>
      ) : (
        <></>
      )}

      <Link
        className="text-slate-800 dark:text-slate-100"
        href="/owner/content/create"
        style={{
          display: "block",
          position: "fixed",
          right: "30px",
          bottom: "30px",
          cursor: "pointer",
        }}
      >
        <IoIosCreate
          style={{
            fontSize: "36px",
          }}
        />
      </Link>
    </div>
  );
}
