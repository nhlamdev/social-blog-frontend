import { getDateTime } from "@/utils/global-func";
import Image from "next/image";
import Link from "next/link";

interface IFollowedByAuthor {
  members: any[];
}

export const FollowedByAuthor = async (props: IFollowedByAuthor) => {
  const { members } = props;

  return (
    <div className="min-h-full flex flex-col gap-2  flex-1">
      <div className="flex flex-col w-full md:w-3/5 gap-2 flex-1 mx-auto">
        {members.map((member: any) => {
          return (
            <Link
              href={`/author/${member._id}`}
              key={member._id}
              className="flex flex-col rounded-lg gap-1 bg-slate-200 bg-opacity-40 p-4
                hover:shadow-md w-full"
              style={{
                transition: "all ease .3s",
                cursor: "pointer",
              }}
            >
              <div className="flex flex-row gap-2 w-full">
                <div className="w-8 h-8 aspect-square rounded-full shadow-lg overflow-hidden relative">
                  <Image
                    src={`/service/${member.image}`}
                    style={{ objectFit: "cover" }}
                    fill
                    alt="image"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    {member.name}
                  </span>
                  <span className="text-xs font-light text-slate-900 dark:text-slate-200">
                    {member.email}
                  </span>
                </div>
              </div>

              <span className="text-xs font-light text-slate-900 dark:text-slate-200">
                Ngày tham gia : {getDateTime(member.created_at)}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
