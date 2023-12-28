import { OwnerCategoryAction } from "@/components/form";
import { PageProps } from "@/interface";
import { serverTranslate } from "@/language/translate-server";
import { capitalizeFirstLetter } from "@/utils/global-func";
import axios from "axios";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const backend = process.env.SERVICE_PORT;

interface ICategory {
  delete_at: string | null;
  created_at: string;
  updated_at: string;
  index: number;
  _id: string;
  title: string;
  summary: string;
}

export default async function OwnerDetailCategoryPage(props: PageProps) {
  const { params } = props;
  const { id } = params;
  const translate = serverTranslate();

  let category: ICategory | undefined;

  try {
    const { data } = await axios.get(
      `http://localhost:${backend}/category/by-id/${id}`
    );

    if (!Boolean(data)) {
      notFound();
    }

    category = data;
  } catch (error: any) {
    console.log(error.response.data.message);

    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4  ">
      <div className="flex flex-row gap-4 w-full">
        <Link href="/owner/category">
          <BsFillArrowLeftCircleFill
            className="hover:scale-110 text-slate-800 dark:text-slate-100 text-2xl"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span className="text-center text-md md:text-xl font-semibold text-slate-900 dark:text-slate-200">
          {capitalizeFirstLetter(translate["UPDATE_CATEGORY"])}
        </span>
      </div>

      <OwnerCategoryAction category={category} />
    </div>
  );
}
