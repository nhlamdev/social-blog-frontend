"use client";

import dynamic from "next/dynamic";

// import ImageResize from "quill-image-resize-module";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div>loading</div>,
});

const modules = ({ disableMedia }: any) => ({
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
    [{ size: [] }],
    [
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "code-block",
      { color: [] },
      { background: [] },
      { align: [] },
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    disableMedia ? ["link"] : ["link", "image", "video"],
    ["clean"],
  ],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
});

const formats = [
  "header",
  "width",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "image",
  "video",
  "color",
  "background",
];

interface MyTextEditorProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  value: string;
  change: (value: string) => void;
  disableMedia?: boolean;
}

export default function TextEditor(props: MyTextEditorProps): JSX.Element {
  const { backgroundColor, height, width, value, change, disableMedia } = props;

  return (
    <ReactQuill
      modules={modules({ disableMedia })}
      formats={formats}
      theme="snow"
      value={value}
      style={{
        width: width ? width : "100%",
        height: height ? height : "300px",
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        marginBottom: `${40}px`,
      }}
      onChange={(content) => change(content)}
    />
  );
}
