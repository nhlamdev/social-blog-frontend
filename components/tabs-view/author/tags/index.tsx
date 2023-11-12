import { contentApi } from "@/api/content";
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
            className="flex flex-row gap-2 px-4 py-2 rounded-md bg-cyan-400 shadow-md
            items-center"
          >
            <span className="text-xs select-none">{tag}</span>

            <span
              className="text-xs p-1 bg-slate-100 bg-opacity-40 w-6 h-6 items-center justify-center
            rounded-full select-none flex font-bold"
            >
              {tags[tag]}
            </span>
          </div>
        );
      })}
    </div>
  );
};
