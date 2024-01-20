import { contentApi } from "@/api-client/content";
import { PaginationComponent } from "@/components/custom";
import { getCountPage } from "@/utils/global-func";
import { ContentByAuthor } from "./row";

interface IContentsByAuthor {
  author: any;
  searchParams: { [key: string]: string | undefined };
}

export const ContentsByAuthor = async (props: IContentsByAuthor) => {
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
    data: { contents, count },
  } = await contentApi.public(params);

  return (
    <div className="min-h-full gap-2 flex flex-col w-3/4 mx-auto flex-1">
      <div className="gap-2 flex flex-col flex-1 ">
        {contents.map((content: any) => {
          return <ContentByAuthor key={content._id} content={content} />;
        })}
      </div>
      {getCountPage(count, 5) > 1 ? (
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
};
