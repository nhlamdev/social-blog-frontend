"use client";

import dynamic from "next/dynamic";

const Demo = dynamic(() => import("./editor").then((mod) => mod.Demo), {
  ssr: false,
  loading: () => <div>loading</div>,
});

export default function QuestionAction() {
  return (
    <div className="p-10">
      <Demo />
    </div>
  );
}
