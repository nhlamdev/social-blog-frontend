"use client";
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { useRef, useState } from "react";

export const OwnerCreateCategoryAction = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const generatorImage = () => {
    if (image) {
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
    <form
      onSubmit={(event) => {
        const formData = new FormData();

        if (!image) {
          enqueueSnackbar("Bạn chưa chọn hình ảnh", {
            variant: "success",
          });
          return;
        }

        formData.append("title", title);
        formData.append("description", description);
        formData.append("files", image, image.name);

        event.preventDefault();
      }}
      className="flex flex-col gap-5 w-full justify-center items-center"
    >
      <div className="flex flex-row w-full p-4 gap-10 ">
        <div className="flex flex-col gap-4" style={{ flex: 7 }}>
          <label className="relative block w-full">
            <span className="sr-only">Tiêu đề</span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Nhập tiêu đề..."
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
              onChange={(e) => {
                const { value } = e.target;
                setDescription(value);
              }}
              rows={4}
              placeholder="Nhập mô tả..."
              name="description"
            />
          </label>
        </div>

        <div style={{ flex: 3 }}>
          {generatorImage()}
          <input
            ref={fileRef}
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files) {
                const f = e.target.files[0];

                setImage(f);
              }
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-slate-400 w-2/5 px-4 py-2 rounded-lg shadow-lg text-lg font-semibold"
      >
        Gửi
      </button>
    </form>
  );
};
