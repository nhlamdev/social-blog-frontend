import { OwnerContentTableComponent } from "@/components/table";
import { PageProps } from "@/interface";
import { Metadata } from "next";
import Link from "next/link";
import { IoIosCreate } from "react-icons/io";
import { OwnerContentsHead } from "./head";

const backend = process.env.SERVICE_PORT;

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  authors: { name: "Nguyễn Hoàng Lâm" },
};

export default async function OwnerContentsPage(props: PageProps) {
  const { searchParams } = props;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <OwnerContentsHead searchParams={searchParams} />

      <OwnerContentTableComponent searchParams={searchParams} />

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
