import { contentApi } from "@/api-client/content";
import { useEffect, useState } from "react";

interface ITagsByAuthor {
  member: any;
}

export const TagsByAuthor = (props: ITagsByAuthor) => {
  const { member } = props;

  const [tags, setTags] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    contentApi.allUniqueTags(member._id).then((res) => {
      const { data } = res;
      setTags(data);
    });
  }, [member._id]);

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {Object.keys(tags).map((tag) => {
        return (
          <div
            key={tag}
            className="flex flex-row gap-2 px-4 py-2 rounded-md shadow-md items-center
            bg-slate-400 bg-opacity-40"
          >
            <span
              className="text-xs select-none 
            dark:text-slate-200 text-slate-900"
            >
              {tag}
            </span>

            <span
              className="text-xs p-1 bg-slate-100 bg-opacity-40 w-6 h-6 items-center justify-center
            rounded-full select-none flex font-bold dark:text-slate-200"
            >
              {tags[tag]}
            </span>
          </div>
        );
      })}
    </div>
  );
};
