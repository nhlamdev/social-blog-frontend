import { contentApi } from "@/api-client/content";
import { useEffect, useState } from "react";

interface ITagsByAuthor {
  author: any;
}

export const TagsByAuthor = (props: ITagsByAuthor) => {
  const { author } = props;

  const [tags, setTags] = useState<{ tag: string; count: number }[]>([]);

  useEffect(() => {
    contentApi.allUniqueTags({ author: author._id }).then((res) => {
      const { data } = res;
      setTags(data);
    });
  }, [author._id]);

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
              className="text-xs p-1 bg-slate-100 bg-opacity-40 w-6 h-6 items-center justify-center
            rounded-full select-none flex font-bold dark:text-slate-200"
            >
              {item.tag}
            </span>
          </div>
        );
      })}
    </div>
  );
};
