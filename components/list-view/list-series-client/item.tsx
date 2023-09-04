import Link from "next/link";
interface SeriesItemProps {
  item: any;
}

export const SeriesItem = (props: SeriesItemProps) => {
  const { item } = props;
  return (
    <Link
      href={`/?series=${item._id}`}
      className="w-full md:w-4/5 lg:w-3/5 bg-slate-100 bg-opacity-40 shadow-lg"
      style={{
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "10px",
            padding: "10px",
          }}
        >
          <span className="text-sm md:text-md lg:text-lg font-semibold text-slate-900 ">
            {item.title}
          </span>
          <span className="text-xs md:text-sm lg:text-md font-light text-slate-900 ">
            {item.summary}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
          }}
        >
          <span className="text-lg font-semibold text-slate-900 ">
            {item.contents}
          </span>
        </div>
      </div>
    </Link>
  );
};
