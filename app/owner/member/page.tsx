import { PageProps } from "@/interface";
import { OwnerMembersHead } from "./head";
import { OwnerMemberRow } from "./row";
import { generateURLWithQueryParams } from "@/utils/global-func";
import { cookies } from "next/headers";
import axios from "axios";

const backend = process.env.SERVICE_PORT;

export default async function OwnerMemberPage(props: PageProps) {
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

  let members;

  const url = generateURLWithQueryParams(
    `http://localhost:${backend}/all-members`,
    params
  );

  try {
    const { data } = await axios.get(url, {
      headers: {
        Cookie: cookies().toString(),
      },
    });

    members = data;
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
      <OwnerMembersHead searchParams={searchParams} />

      <div className="rounded my-6 w-full h-full">
        <table className="bg-slate-100 bg-opacity-20 min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-slate-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Thông tin</th>
              <th className="py-3 px-6 text-center">Lượt xem</th>
              <th className="py-3 px-6 text-center">Loại</th>
              <th className="py-3 px-6 text-center">Ngày tham gia</th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-200 text-sm font-light">
            {members.map((m: any) => {
              return <OwnerMemberRow key={m._id} item={m} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
