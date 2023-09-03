"use client";
import { apiCaller } from "@/api";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";

interface SeriesControlDialogProps {
  value?: any;
}
export const SeriesControlDialog = (props: SeriesControlDialogProps) => {
  const { value } = props;

  const route = useRouter();
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    title: value ? value.title : "",
    summary: value ? value.summary : "",
  });

  const submit = async () => {
    try {
      if (value) {
        await apiCaller.seriesApi.update(value._id, {
          title: data.title,
          summary: data.summary,
        });
      } else {
        await apiCaller.seriesApi.create(data);
      }

      route.refresh();
      setOpen(false);
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
  };

  useEffect(() => {
    if (open) {
      setData({
        title: value ? value.title : "",
        summary: value ? value.summary : "",
      });
    }
  }, [open, value]);

  return (
    <>
      {value ? (
        <FaEdit
          className="text-amber-500"
          style={{
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        />
      ) : (
        <IoIosCreate
          className="text-slate-800 dark:text-slate-100"
          style={{
            display: "block",
            position: "fixed",
            right: "30px",
            bottom: "30px",
            fontSize: "36px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        />
      )}

      {open ? (
        <div className="dialog-box">
          <div
            className="bg-slate-400"
            style={{
              width: "600px",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              padding: "10px",
              gap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  flex: 1,
                }}
              >
                {value ? "Chỉnh sửa chuỗi bài viết" : "Tạo mới chuỗi bài viết"}
              </span>

              <AiFillCloseCircle
                className="text-red-500"
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flex: 1,
              }}
            >
              <input
                name="title"
                className="border-slate-700"
                style={{
                  border: "1px solid ",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
                placeholder="Nhập tên chuỗi bài viết."
                value={data.title}
                onChange={(e) => {
                  const { value } = e.target;
                  setData({ ...data, title: value });
                }}
              />
              <textarea
                name="summary"
                className="border-slate-700"
                style={{
                  border: "1px solid ",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  resize: "none",
                }}
                placeholder="Hãy để lại vài dòng mô tả."
                rows={5}
                value={data.summary}
                onChange={(e) => {
                  const { value } = e.target;
                  setData({ ...data, summary: value });
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <div
                className="btn bg-slate-200"
                style={{
                  width: "fit-content",
                  padding: "10px 20px",
                }}
                onClick={() => submit()}
              >
                <span>{value ? "Lưu" : "Tạo mới"}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
