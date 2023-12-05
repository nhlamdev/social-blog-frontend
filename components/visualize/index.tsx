"use client";

import { commonApi } from "@/api/common";
import { useCallback, useEffect, useState } from "react";

interface IVisualize {
  total_member_access: number;
  total_member_online: number;
  total_memory_use: number;
}

interface IStatus {
  content: number;
  category: number;
  series: number;
}

export const VisualizeComponent = () => {
  const [data, setData] = useState<{
    visual: IVisualize;
    status: IStatus;
  } | null>(null);

  const fetchData = useCallback(async () => {
    const { data: payload } = await commonApi.visualize();

    setData(payload);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!data) {
    return "loading";
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-2 px-4">
        <div
          className="flex flex-1 bg-slate-200 bg-opacity-40 rounded-md shadow-md
        items-center justify-center aspect-square m-4"
        >
          <span>{data.status.content}</span>
        </div>
        <div
          className="flex flex-1 bg-slate-200 bg-opacity-40 rounded-md shadow-md
        items-center justify-center aspect-square m-4"
        >
          <span>{data.status.category}</span>
        </div>
        <div
          className="flex flex-1 bg-slate-200 bg-opacity-40 rounded-md shadow-md
        items-center justify-center aspect-square m-4"
        >
          <span>{data.status.series}</span>
        </div>
      </div>

      <div></div>
    </div>
  );
};
