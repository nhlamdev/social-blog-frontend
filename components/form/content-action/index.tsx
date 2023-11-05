"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { ContentActionTagsBox } from "./tag-box";
import { ContentCategoryBox } from "./categories-box";
import { apiCaller } from "@/api";
import { enqueueSnackbar } from "notistack";
import { CasePublicContentType } from "@/interface";
import { casePublicData } from "@/constant";
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

  const [casePublic, setCasePublic] = useState<CasePublicContentType>("public");
  const [category, setCategory] = useState(
    content && content.category ? content.category._id : ""
  );
  const [tags, setTags] = useState<string[]>(content ? content.tags : []);

  const action = async () => {
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("body", body);
    // formData.append("category", category);
    // tags.forEach((tag, key) => {
    //   formData.append(`tags[${key}]`, tag);
    // });

    const payload = {
      title: title,
      body: body,
      category: category,
      complete: true,
      tags: tags,
      casePublic: casePublic,
    };

    if (content) {
      try {
        await apiCaller.contentApi.update(content._id, payload);
        router.replace("/owner/content");
        router.refresh();
      } catch (error: any) {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            enqueueSnackbar(item, {
              variant: "error",
            });
          });
        } else {
          enqueueSnackbar(
            error?.response ? error.response.data?.message : error.message,
            {
              variant: "error",
            }
          );
        }
      }
    } else {
      try {
        await apiCaller.contentApi.create(payload);
        router.replace("/owner/content");
        router.refresh();
      } catch (error: any) {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            enqueueSnackbar(item, {
              variant: "error",
            });
          });
        } else {
          enqueueSnackbar(
            error?.response ? error.response.data?.message : error.message,
            {
              variant: "error",
            }
          );
        }
      }
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="gap-6 flex flex-col px-10 lg:w-4/6 w-4/5 mx-auto  flex-1">
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

        <div className="flex flex-row gap-2 justify-center items-center">
          {casePublicData.map((c) => {
            return (
              <span
                key={c.key}
                className={`text-xs px-4 py-2 rounded-md select-none 
            cursor-pointer bg-opacity-40 shadow-md ${
              casePublic === c.key
                ? " bg-slate-900 text-slate-100"
                : "dark:text-slate-100"
            }`}
                style={{ border: "1px solid white" }}
                onClick={() => {
                  setCasePublic(c.key);
                }}
              >
                {c.value}
              </span>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-50 w-full">
        <TextEditor value={body} change={(value) => setBody(value)} />
      </div>

      <div className="flex flex-row w-full px-2 justify-end">
        <button
          onClick={() => {
            action();
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
