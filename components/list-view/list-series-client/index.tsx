import { PaginationDirectComponent } from "@/components/custom";
import { SeriesItem } from "./item";
import { generateURLWithQueryParams, getCountPage } from "@/utils/global-func";

interface ClientListSeriesProps {
  series: any;
  searchParams: { [key: string]: string | undefined };
}
export const ClientListSeries = (props: ClientListSeriesProps) => {
  const { series, searchParams } = props;

  const { page } = searchParams;
  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <div className="w-full flex flex-col p-2 items-center gap-2 flex-1">
        {series.data.map((series: any, key: any) => {
          return (
            <SeriesItem key={`series-${series._id}-${key}`} item={series} />
          );
        })}
      </div>

      {series && series.max !== 0 ? (
        <PaginationDirectComponent
          current={current + 1}
          total={getCountPage(series.max, 6)}
          urlDirect={(page: number) => {
            const clone = { ...searchParams, page: page.toString() };

            return generateURLWithQueryParams("series", clone);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
