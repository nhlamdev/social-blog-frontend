import { OwnerCategoryAction } from "@/components/form";
import { IImage, PageProps } from "@/interface";
import axios from "axios";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const backend = process.env.SERVICE_PORT;

interface ICategory {
  delete_at: string | null;
  created_at: string;
  updated_at: string;
  index: number;
  _id: string;
  title: string;
  summary: string;
  image: IImage;
}

export default async function OwnerDetailCategoryPage(props: PageProps) {
  const { params } = props;
  const { id } = params;

  let category: ICategory | undefined;

  try {
    const { data } = await axios.get(
      `http://localhost:${backend}/category/by-id/${id}`,
      {
        headers: {
          Cookie: cookies().toString(),
        },
      }
    );

    if (!Boolean(data)) {
      notFound();
    }

    category = data;
  } catch (error: any) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Thêm mới bài viết
      </span>

      <OwnerCategoryAction category={category} />
    </div>
  );
}
