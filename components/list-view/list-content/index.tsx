import { PaginationComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { ClientHomeListContentItem } from "./item";

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
      {getCountPage(count, 6) > 1 ? (
        <PaginationComponent
          searchParams={searchParams}
          currentPage={current + 1}
          maxPage={getCountPage(count, 6)}
          queryName="page"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
