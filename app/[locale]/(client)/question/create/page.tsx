"use client";

import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("@/components/custom/text-editor"), {
  ssr: false,
  loading: () => <div>loading</div>,
});

export default function QuestionAction() {
  return (
    <div className="p-10">
      <TextEditor
        value={""}
        disableMedia={true}
        change={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
