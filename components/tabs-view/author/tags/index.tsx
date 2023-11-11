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
    <div className="flex flex-row">
      {Object.keys(tags).map((tag) => {
        return (
          <div key={tag} className="flex flex-row gap-2 ">
            <span>{tag}</span>
            <span>{tags[tag]}</span>
          </div>
        );
      })}
    </div>
  );
};
