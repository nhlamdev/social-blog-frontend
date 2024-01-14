import { PaginationDirectComponent } from "@/components/custom";
import { ClientHomeListContentItem } from "./item";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";

interface ClientContentListViewProps {
  contents: any[];
  count: number;
  searchParams: { [key: string]: string | undefined };
}

export const ClientContentListView = (props: ClientContentListViewProps) => {
  const { contents, searchParams, count } = props;

  const { page } = searchParams;
  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  return (
    <div
      className="w-full flex flex-col gap-4 "
      style={{ gap: "20px", padding: "10px", minHeight: "100vh" }}
    >
      <div
        className="w-full h-full flex flex-col gap-2 items-center"
        style={{ width: "100%", gap: "10px", flex: 1 }}
      >
        {contents?.map((content: any) => {
          return (
            <ClientHomeListContentItem key={content._id} content={content} />
          );
        })}
      </div>

      {count && count !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(count, 6)}
          urlDirect={(p: number) => {
            const clone = { ...searchParams, page: p.toString() };

            return generateURLWithQueryParams("/content", clone);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
