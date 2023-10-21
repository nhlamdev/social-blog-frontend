"use client";
import { apiCaller } from "@/api";
import Link from "next/link";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineContentCopy, MdOutlineRemoveCircle } from "react-icons/md";
interface SeriesItemProps {
  item: any;
  reload: () => void;
}

export const ListViewItem = (props: SeriesItemProps) => {
  const { item, reload } = props;

  return (
    <div
      className="shadow-md w-4/5 lg:w-3/4 bg-slate-100 bg-opacity-60 backdrop-blur
      flex flex-row gap-2 p-2 rounded-lg items-center"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "10px",
        }}
      >
        <div className="flex flex-row gap-2 items-center">
          <span className="text-md  text-slate-900">{item.title}</span>
          {item.contents > 0 ? (
            <span className="text-xs font-light  text-slate-900">
              ({item.contents})
            </span>
          ) : (
            <></>
          )}
        </div>
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
        <Link href={`/owner/series/${item._id}/content`}>
          <MdOutlineContentCopy
            className="text-cyan-400"
            style={{
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
        </Link>

        <Link href={`/owner/series/${item._id}`}>
          <FaEdit
            className="text-amber-500"
            style={{
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
        </Link>
        <MdOutlineRemoveCircle
          className="text-rose-700"
          style={{
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={async () => {
            await apiCaller.seriesApi.remove(item._id);
            reload();
          }}
        />
      </div>
    </div>
  );
};
