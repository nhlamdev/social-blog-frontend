import { PaginationComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { SeriesItem } from "./item";

interface ClientListSeriesProps {
  series: any[];
  count: number;
  searchParams: { [key: string]: string | undefined };
}
export const ClientListSeries = (props: ClientListSeriesProps) => {
  const { series, searchParams, count } = props;

  const { page } = searchParams;
  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <div className="w-full flex flex-col p-2 items-center gap-2 flex-1">
        {series.map((series: any, key: any) => {
          return (
            <SeriesItem key={`series-${series._id}-${key}`} item={series} />
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
