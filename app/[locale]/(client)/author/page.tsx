import { PaginationDirectComponent } from "@/components/custom";
import { ListViewAuthors } from "@/components/list-view/list-author";
import { PageProps } from "@/interface";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";
import axios from "axios";
const backend = process.env.SERVICE_PORT;

export default async function AuthorContentPage(props: PageProps) {
  const { searchParams } = props;

  const { page, series } = searchParams;

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const {
    data: [members, count],
  } = await axios.get(`http://localhost:${backend}/content/all-author`, {
    params: { ...searchParams, skip: (current * 5).toString(), take: "5" },
  });

  return (
    <div className="flex-1 flex flex-col w-full p-4 gap-4  items-center">
      <ListViewAuthors members={members} />

      {members && count !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(count, 5)}
          urlDirect={(p: number) => {
            const clone = { ...searchParams, page: p.toString() };

            return generateURLWithQueryParams("/author", clone);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
