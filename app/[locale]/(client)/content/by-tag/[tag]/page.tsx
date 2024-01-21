import { ClientContentListView } from "@/components/list-view";
import { PageProps } from "@/interface";
import { serverTranslate } from "@/language/translate-server";
import { decodeURIWidthSpecialCharacters } from "@/utils/global-func";
import axios from "axios";
import { notFound } from "next/navigation";

const backend = process.env.SERVICE_PORT;

export default async function ClientContentsByTagPage(props: PageProps) {
  const {
    params: { tag },
    searchParams,
  } = props;

  const translate = serverTranslate();

  if (!tag && !backend) {
    notFound();
  }

  const {
    data: { contents, count },
  } = await axios.get(`http://localhost:${backend}/content/by-tag/${tag}`);

  if (!contents) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <h1 className="text-2xl font-semibold">
        {translate["CONTENT_BY_TAG"]} :{" "}
        {tag ? decodeURIWidthSpecialCharacters(tag) : ""}
      </h1>
      <ClientContentListView
        contents={contents}
        count={count}
        searchParams={searchParams}
      />
    </div>
  );
}
