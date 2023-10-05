import { PageProps } from "@/interface";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const backend = process.env.SERVICE_PORT;

export default async function ContentInAuthorPage(props: PageProps) {
  const { params, searchParams } = props;

  const { caseView } = searchParams;
  const { id } = params;

  const { data: member } = await axios.get(
    `http://localhost:${backend}/author/${id}`
  );

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <div className="flex flex-row w-full gap-4">
        <Image
          src={member.image}
          className="rounded-full shadow-lg "
          width={150}
          height={150}
          style={{ objectFit: "cover", border: "4px solid white" }}
          alt="photo"
        />

        <div className="flex flex-col">
          <span className="text-lg font-semibold">Tác giả : {member.name}</span>
          <span className="text-md font-light">
            Đia chỉ mail : {member.email}
          </span>
        </div>
      </div>

      <div className="w-full flex flex-row gap-2">
        <Link
          href={`/author/${id}`}
          className="px-4 py-2 bg-teal-300 rounded-md shadow-md"
          style={{
            cursor: "pointer",
            border:
              caseView !== "series" && caseView !== "tags"
                ? "2px solid black"
                : undefined,
          }}
        >
          <span className="text-xs text-slate-800">Bài viết</span>
        </Link>
        <Link
          href={`/author/${id}?caseView=series`}
          className="px-4 py-2 bg-teal-300 rounded-md shadow-md"
          style={{
            cursor: "pointer",
            border: caseView === "series" ? "2px solid black" : undefined,
          }}
        >
          <span className="text-xs text-slate-800">Chuỗi bài viết</span>
        </Link>
        <Link
          href={`/author/${id}?caseView=tags`}
          className="px-4 py-2 bg-teal-300 rounded-md shadow-md"
          style={{
            cursor: "pointer",
            border: caseView === "tags" ? "2px solid black" : undefined,
          }}
        >
          <span className="text-xs text-slate-800">Thẻ</span>
        </Link>
      </div>
    </div>
  );
}
