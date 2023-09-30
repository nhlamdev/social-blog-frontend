"use client";
import { apiCaller } from "@/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { MdOutlineContentCopy, MdOutlineRemoveCircle } from "react-icons/md";
interface SeriesItemProps {
  item: any;
}

export const ListViewItem = (props: SeriesItemProps) => {
  const { item } = props;

  const router = useRouter();
  return (
    <div
      className="shadow-md w-3/4 bg-slate-100 bg-opacity-60"
      style={{
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <picture>
        <img
          src={`/service/${item.image.fileName}`}
          className="h-20 rounded-md "
          alt="photo"
        />
      </picture>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "10px",
        }}
      >
        <span className="text-slate-800 text-md">{item.title}</span>
        <span className="text-slate-800 text-xs">{item.summary}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link href={`/owner/category/${item._id}/content-in`}>
          <MdOutlineContentCopy
            className="text-cyan-400"
            style={{
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
        </Link>

        {/* {openContentsDialog ? (
          <ListContentInCategoryDialog
            close={() => setOpenContentsDialog(false)}
            categoryId={item._id}
          />
        ) : (
          <></>
        )} */}
        <Link href={`/owner/category/${item._id}`}>
          <FaEdit
            className="text-amber-500"
            style={{
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
        </Link>
        {/* <CategoryControlDialog value={item} /> */}
        <MdOutlineRemoveCircle
          className="text-rose-700"
          style={{
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={async () => {
            await apiCaller.categoryApi.remove(item._id);
            router.refresh();
          }}
        />
      </div>
    </div>
  );
};
