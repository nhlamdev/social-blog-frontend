import { seriesApi } from "@/api-client/series";
import { PaginationComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { SeriesByAuthorRow } from "./row";

interface ISeriesByAuthor {
  author: any;
  searchParams: { [key: string]: string | undefined };
}

export const SeriesByAuthor = async (props: ISeriesByAuthor) => {
  const { author, searchParams } = props;
  const { page } = searchParams;

  const current =
    page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
      ? Number(page) - 1
      : 0;

  const params = {
    author: author._id,
    skip: (current * 5).toString(),
    take: "5",
  };

  const {
    data: { series, count },
  } = await seriesApi.paginate(params);

  return (
    <div className="min-h-full flex flex-col gap-2  flex-1">
      <div className="gap-2 flex flex-col flex-1 ">
        {series.map((s: any) => {
          return <SeriesByAuthorRow key={s._id} item={s} />;
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
