"use client";
import { apiCaller } from "@/api";
import { useClientTranslate } from "@/language/translate-client";
import { capitalizeFirstLetter } from "@/utils/global-func";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

interface ICategory {
  delete_at: string | null;
  created_at: string;
  updated_at: string;
  index: number;
  _id: string;
  title: string;
  description: string;
}

interface OwnerCategoryActionProps {
  category?: ICategory;
}

export const OwnerCategoryAction = (props: OwnerCategoryActionProps) => {
  const router = useRouter();

  const { category } = props;

  const translate = useClientTranslate();

  const [title, setTitle] = useState(category?.title ? category.title : "");
  const [description, setDescription] = useState(
    category?.description ? category.description : ""
  );
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setLoading(true);

        if (category) {
          apiCaller.categoryApi
            .update(category._id, { title, description })
            .then(() => {
              router.replace("/owner/category");
              router.refresh();
            })
            .catch((error) => {
              if (Array.isArray(error?.response?.data?.message)) {
                error?.response?.data?.message.forEach((item: any) => {
                  enqueueSnackbar(item, { variant: "error" });
                });
              } else {
                enqueueSnackbar(
                  error?.response
                    ? error.response.data?.message
                    : error.message,
                  { variant: "error" }
                );
              }
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          apiCaller.categoryApi
            .create({ title, description })
            .then(() => {
              router.replace("/owner/category");
              router.refresh();
            })
            .catch((error) => {
              if (Array.isArray(error?.response?.data?.message)) {
                error?.response?.data?.message.forEach((item: any) => {
                  enqueueSnackbar(item, { variant: "error" });
                });
              } else {
                enqueueSnackbar(
                  error?.response
                    ? error.response.data?.message
                    : error.message,
                  { variant: "error" }
                );
              }
            })
            .finally(() => {
              setLoading(false);
            });
        }
      }}
      className="flex flex-col gap-5 w-full justify-center items-center"
    >
      <div
        className="flex flex-col gap-4 w-full sm:w-4/5 lg:w-3/4"
        style={{ flex: 7 }}
      >
        <label className="relative block w-full">
          <span className="sr-only">Tiêu đề</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder={`${translate["TITLE"]}...`}
            value={title}
            onChange={(e) => {
              const { value } = e.target;
              setTitle(value);
            }}
            type="text"
            name="title"
          />
        </label>

        <label className="relative block w-full">
          <span className="sr-only">Tiêu đề</span>
          <textarea
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            style={{ resize: "none" }}
            value={description}
            onChange={(e) => {
              const { value } = e.target;
              setDescription(value);
            }}
            rows={4}
            placeholder={`${translate["DESCRIPTION"]}...`}
            name="description"
          />
        </label>
      </div>

      {loading ? (
        <button
          type="submit"
          className="bg-slate-400 w-2/5 px-4 py-2 rounded-lg shadow-lg text-lg font-semibold"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </button>
      ) : (
        <button
          type="submit"
          className="bg-slate-400 w-2/5 px-4 py-2 rounded-lg shadow-lg text-lg font-semibold"
        >
          {capitalizeFirstLetter(translate["SUBMIT"])}
        </button>
      )}
    </form>
  );
};
