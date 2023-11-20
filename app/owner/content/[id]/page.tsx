"use client";
import { contentApi } from "@/api/content";
import { FormContentAction } from "@/components/form";
import { PageProps } from "@/interface";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";

export default function OwnerContentUpdatePage(props: PageProps) {
  const { params } = props;
  const { id } = params;

  const router = useRouter();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      router.replace("/");
      return;
    }

    setLoading(true);

    contentApi
      .getContentByIdAndOwner(id)
      .then((res) => {
        setContent(res.data);
      })
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            enqueueSnackbar(item, { variant: "error" });
          });
        } else {
          enqueueSnackbar(
            error?.response ? error.response.data?.message : error.message,
            { variant: "error" }
          );
        }

        router.replace("/");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, router]);

  if (loading) {
    return <span>loading</span>;
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
