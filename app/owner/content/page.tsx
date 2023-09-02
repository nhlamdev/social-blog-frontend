import { apiCaller } from "@/api";
import { PaginationDirectComponent } from "@/components/custom";
import { PageProps } from "@/interface";
import {
  generateURLWithQueryParams,
  getCountPage,
  getDateTime,
} from "@/utils/global-func";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { OwnerContentRow } from "./row";
import { OwnerContentsHead } from "./head";

const backend = process.env.SERVICE_PORT;

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function OwnerContentsPage(props: PageProps) {
  const { searchParams } = props;
  const { page, search } = searchParams;

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

  const url = generateURLWithQueryParams(
    `http://localhost:${backend}/content/owner`,
    params
  );

  try {
    const { data } = await axios.get(url, {
      headers: {
        Cookie: cookies().toString(),
      },
    });

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
      <OwnerContentsHead searchParams={searchParams} />

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

      {contents && contents.max !== 0 ? (
        <>
          <PaginationDirectComponent
            current={current + 1}
            total={getCountPage(contents.max, 8)}
            urlDirect={(p) => {
              const newSearchParams = {
                ...searchParams,
                page: p.toString(),
              };
              const url = generateURLWithQueryParams(
                "/owner/content",
                newSearchParams
              );

              return url;
            }}
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
