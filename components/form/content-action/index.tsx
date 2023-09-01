"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { ContentActionTagsBox } from "./tag-box";
import { ContentCategoryBox } from "./categories-box";
export const TextEditor = dynamic(
  () => import("@/components/custom/text-editor"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

interface FormContentActionProps {
  content?: any;
}

export const FormContentAction = (props: FormContentActionProps) => {
  const { content } = props;
  const router = useRouter();
  const [title, setTitle] = useState(content ? content.title : "");
  const [body, setBody] = useState(content ? content.body : "");
  const [image, setImage] = useState<File | null | string>(
    content && content.image ? content.image : null
  );
  const [category, setCategory] = useState(
    content && content.category ? content.category._id : ""
  );
  const [tags, setTags] = useState<string[]>(
    content ? content.tags.map((tag: any) => tag.title) : []
  );
  const [complete, setComplete] = useState(true);

  const fileRef = useRef<HTMLInputElement | null>(null);

  const generatorImage = () => {
    if (image) {
      if (typeof image === "string") {
        return (
          <Image
            onClick={() => {
              if (fileRef && fileRef.current) {
                fileRef.current.click();
              }
            }}
            src={`/service/${image}`}
            width={300}
            height={200}
            style={{
              cursor: "pointer",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="photo"
          />
        );
      } else {
        return (
          <Image
            onClick={() => {
              if (fileRef && fileRef.current) {
                fileRef.current.click();
              }
            }}
            src={URL.createObjectURL(image)}
            width={300}
            height={200}
            style={{
              cursor: "pointer",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="photo"
          />
        );
      }
    } else {
      return (
        <Image
          onClick={() => {
            if (fileRef && fileRef.current) {
              fileRef.current.click();
            }
          }}
          style={{
            cursor: "pointer",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src="http://via.placeholder.com/300x200"
          width={300}
          height={200}
          alt="image"
        />
      );
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex flex-row w-full gap-4 px-2  justify-between">
        <div className="gap-6 flex flex-col px-10  flex-1">
          <label className="relative block">
            <span className="sr-only">Tiêu đề</span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Nhập tiêu đề..."
              type="text"
              name="title"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                setTitle(value);
              }}
            />
          </label>

          <ContentCategoryBox
            value={category}
            change={(txt) => setCategory(txt)}
          />

          <ContentActionTagsBox tags={tags} change={(tags) => setTags(tags)} />

          <label className="mt-2 flex items-center relative w-max cursor-pointer select-none">
            <span className="text-sm font-semibold mr-3 dark:text-slate-200 text-slate-800">
              {"Công khai"}
            </span>

            <input
              type="checkbox"
              checked={complete}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setComplete(e.target.checked);
              }}
              className={`appearance-none transition-colors cursor-pointer w-14 h-6
                          rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2
                          focus:ring-offset-black focus:ring-blue-500 ${
                            complete ? "bg-green-500" : "bg-slate-500"
                          }`}
            />
          </label>
        </div>

        <div className="w-fit">
          {generatorImage()}

          <input
            ref={fileRef}
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files) {
                const f = e.target.files[0];
                if (content) {
                  const formdata = new FormData();
                  formdata.append("files", f, f.name);
                  // updateImageMutation.mutate({
                  //   id: content._id,
                  //   formdata: formdata,
                  // });
                } else {
                  setImage(f);
                }
              }
            }}
          />
        </div>
      </div>

      <div className="bg-slate-50 w-full">
        <TextEditor value={body} change={(value) => setBody(value)} />
      </div>

      <div className="flex flex-row w-full px-2 justify-end">
        <button
          onClick={() => {
            // console.log(body);
            // submitMutation.mutate();
          }}
          className="text-teal-500 bg-transparent border border-solid border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 
        font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Lưu nháp
        </button>
        <button
          onClick={() => {
            // console.log(body);
            // submitMutation.mutate();
          }}
          className="text-teal-500 bg-transparent border border-solid border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 
        font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Hoàn thành
        </button>
      </div>
    </div>
  );
};
