"use client";
import ImageResize from "quill-image-resize-module-react";

import ReactQuill, { Quill } from "react-quill";

import QuillNoSSRWrapper from "react-quill";

import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageResize", ImageResize);

const modules = {
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
    ["link", "image", "video"],
    ["clean"],
  ],
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize", "Toolbar"],
    displayStyles: {
      backgroundColor: "black",
      border: "none",
      color: "#fff",
      // other camelCase styles for size display
    },
  },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
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
}

export default function TextEditor(props: MyTextEditorProps): JSX.Element {
  const { backgroundColor, height, width, value, change } = props;
  return (
    <QuillNoSSRWrapper
      modules={modules}
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
