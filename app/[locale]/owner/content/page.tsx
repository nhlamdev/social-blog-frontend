import { CreateActionButton } from "@/components/custom";
import { OwnerContentTableComponent } from "@/components/table";
import { PageProps } from "@/interface";
import { Metadata } from "next";
import { OwnerContentsHead } from "./head";

const backend = process.env.SERVICE_PORT;

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function OwnerContentsPage(props: PageProps) {
  const { searchParams } = props;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <OwnerContentsHead searchParams={searchParams} />
      <OwnerContentTableComponent searchParams={searchParams} />
      <CreateActionButton direct="/owner/content/create" />
    </div>
  );
}
