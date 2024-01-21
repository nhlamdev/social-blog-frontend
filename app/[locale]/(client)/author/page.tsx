import { PaginationComponent } from "@/components/custom";
import { ListViewAuthors } from "@/components/list-view/list-author";
import { PageProps } from "@/interface";
import { serverTranslate } from "@/language/translate-server";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import axios from "axios";
const backend = process.env.SERVICE_PORT;

export default async function AuthorContentPage(props: PageProps) {
  const { searchParams } = props;

  const { page } = searchParams;

  const translate = serverTranslate();

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const {
    data: { members, count },
  } = await axios.get(`http://localhost:${backend}/member/author`, {
    params: { ...searchParams, skip: (current * 5).toString(), take: "5" },
  });

  const maxPage = getCountPage(count, 5);

  return (
    <div className="flex-1 flex flex-col w-full p-4 gap-4  items-center">
      <ListViewAuthors members={members} />

      {getCountPage(count, 5) > 1 && current + 1 <= maxPage ? (
        <PaginationComponent
          searchParams={searchParams}
          currentPage={current + 1}
          maxPage={getCountPage(count, 5)}
          queryName="page"
        />
      ) : (
        <></>
      )}
    </div>
  );
}
