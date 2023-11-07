"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// const ImageResize = require("quill-image-resize-module-react");

// const { Quill } = require("react-quill");

// dynamic(() => require("react-quill").then((mod) => mod.Quill), {
//   ssr: false,
// }),

// const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
//   loading: () => <p>Loading...</p>,
//   ssr: false,
// });

interface MyTextEditorProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  value: string;
  change: (value: string) => void;
}

export default function TextEditor(props: MyTextEditorProps): JSX.Element {
  const { backgroundColor, height, width, value, change } = props;

  const { Quill } = require("react-quill");

  const ImageResize = dynamic(
    () => require("quill-image-resize-module-react"),
    {
      ssr: false,
    }
  );

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

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

  return (
    <ReactQuill
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
