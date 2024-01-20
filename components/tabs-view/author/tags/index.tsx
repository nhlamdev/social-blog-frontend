import { contentApi } from "@/api-client/content";
interface ITagsByAuthor {
  author: any;
}

export const TagsByAuthor = async (props: ITagsByAuthor) => {
  const { author } = props;

  const { data: tags }: { data: { tag: string; count: number }[] } =
    await contentApi.allUniqueTags({ author: author._id });

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {tags.map((item) => {
        return (
          <div
            key={item.tag}
            className="flex flex-row gap-2 px-4 py-2 rounded-md shadow-md items-center
            bg-slate-400 bg-opacity-40"
          >
            <span
              className="text-xs select-none 
            dark:text-slate-200 text-slate-900"
            >
              {item.tag}
            </span>

            <span
              className="text-xs py-1 px-2 bg-slate-100 bg-opacity-40 items-center justify-center
            rounded-full select-none flex font-bold dark:text-slate-200"
            >
              {item.count}
            </span>
          </div>
        );
      })}
    </div>
  );
};
