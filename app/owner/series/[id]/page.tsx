import { OwnerSeriesAction } from "@/components/form";
import { PageProps } from "@/interface";
import axios from "axios";
import { notFound } from "next/navigation";

const backend = process.env.SERVICE_PORT;

interface ISeries {
  delete_at: string | null;
  created_at: string;
  updated_at: string;
  index: number;
  _id: string;
  title: string;
  summary: string;
}

export default async function OwnerDetailSeriesPage(props: PageProps) {
  const { params } = props;
  const { id } = params;

  let series: ISeries | undefined;

  try {
    const { data } = await axios.get(
      `http://localhost:${backend}/series/by-id/${id}`
    );

    if (!Boolean(data)) {
      notFound();
    }

    series = data;
  } catch (error: any) {
    notFound();
  }
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Chỉnh sửa chuỗi bài viết
      </span>

      <OwnerSeriesAction series={series} />
    </div>
  );
}
