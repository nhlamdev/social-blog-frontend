import Link from "next/link";
import Image from "next/image";

interface SeriesItemProps {
  item: any;
}

export const SeriesItem = (props: SeriesItemProps) => {
  const { item } = props;
  return (
    <Link
      href={`/content?series=${item._id}`}
      className="w-full md:w-4/5 lg:w-3/5 flex flex-col items-center gap-2 cursor-pointer overflow-hidden
      bg-slate-100 bg-opacity-40 shadow-sm rounded-md "
    >
      <div className="flex flex-row w-full items-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "10px",
            padding: "10px",
          }}
        >
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {item.title}
          </span>

          <div className="flex flex-row w-full gap-2 items-center">
            <div className="w-6 h-6 relative">
              <Image
                src={item.created_by.image}
                className="rounded-full"
                fill
                alt="photo"
              />
            </div>

            <span className="text-xs text-slate-900 dark:text-slate-100">
              {item.created_by.name}
            </span>
          </div>
        </div>

        <div
          className="rounded-md bg-slate-200 flex items-center justify-center m-2
        w-10 h-10"
        >
          <span className="text-md font-semibold ">{item.contents}</span>
        </div>
      </div>
    </Link>
  );
};
