"use client";
import Image from "next/image";
import Link from "next/link";

interface IAuththorBoxDisplay {
  members: any[];
}
export const AuththorsBoxDisplay = (props: IAuththorBoxDisplay) => {
  const { members } = props;

  return members.map((member: any) => {
    return (
      <Link
        href={`/author/${member._id}`}
        key={member._id}
        className="flex flex-row rounded-lg gap-2 bg-emerald-600 bg-opacity-40 px-4 py-2
                      hover:shadow-lg"
        style={{
          width: "fit-content",
          height: "fit-content",
          alignItems: "center",
          transition: "all ease .3s",
          cursor: "pointer",
        }}
      >
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

        <span className="text-sm">{member.countContent} Bài viết</span>
      </Link>
    );
  });
};
