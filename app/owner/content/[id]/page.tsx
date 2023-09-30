import { FormContentAction } from "@/components/form";
import { PageProps } from "@/interface";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";

const backend = process.env.SERVICE_PORT;

export const metadata: Metadata = {
  title: "Chỉnh sửa bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function OwnerContentUpdatePage(props: PageProps) {
  const { params } = props;
  const { id } = params;

  let content;

  try {
    const { data } = await axios.get(
      `http://localhost:${backend}/content/by-id/${id}`,
      {
        headers: {
          Cookie: cookies().toString(),
        },
      }
    );

    content = data;
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
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Thêm mới bài viết
      </span>

      <FormContentAction content={content} />
    </div>
  );
}
