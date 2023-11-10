"use client";
import Image from "next/image";
import Link from "next/link";

interface IAuththorBoxDisplay {
  members: any[];
}
export const AuththorsBoxDisplay = (props: IAuththorBoxDisplay) => {
  const { members } = props;
  return (
    <div className="flex flex-col w-3/5 gap-2">
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
                  src={member.image}
                  style={{ objectFit: "cover" }}
                  fill
                  alt="image"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{member.name}</span>
                <span className="text-xs font-light">{member.email}</span>
              </div>
            </div>

            <span>Ngày tham gia : {member.created_at}</span>

            <div>
              <span>{member.countContent}</span>
            </div>

            {/* <span className="text-sm">{member.countContent} Bài viết</span> */}
          </Link>
        );
      })}
    </div>
  );
};
