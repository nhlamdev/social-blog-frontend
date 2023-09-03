"use client";
import { apiCaller } from "@/api";
import {
  ListContentInSeriesDialog,
  SeriesControlDialog,
} from "@/components/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineContentCopy, MdOutlineRemoveCircle } from "react-icons/md";
interface SeriesItemProps {
  item: any;
}

export const ListViewItem = (props: SeriesItemProps) => {
  const { item } = props;

  const [openContentsDialog, setOpenContentsDialog] = useState(false);
  const route = useRouter();
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
        <MdOutlineContentCopy
          className="text-cyan-400"
          style={{
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={() => setOpenContentsDialog(true)}
        />

        {openContentsDialog ? (
          <ListContentInSeriesDialog
            close={() => setOpenContentsDialog(false)}
            seriesId={item._id}
          />
        ) : (
          <></>
        )}

        <SeriesControlDialog value={item} />

        <MdOutlineRemoveCircle
          className="text-rose-700"
          style={{
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={async () => {
            await apiCaller.seriesApi.remove(item._id);
            route.refresh();
          }}
        />
      </div>
    </div>
  );
};
