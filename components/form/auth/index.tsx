"use client";
import { apiCaller } from "@/api";
import { axiosInstance } from "@/helper";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const AuthFormAction = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    const payload = { account, password };

    apiCaller.authApi
      .ownerLogin(payload)
      .then(() => {
        router.replace("/owner/statistical");
      })
      .catch((error) => {
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
      });
  };
  return (
    <div
      className="flex flex-col gap-5 bg-slate-600 bg-opacity-30 shadow-md backdrop-blur-sm
      rounded-lg w-fit p-5"
      style={{
        width: "500px",
        padding: "20px",
      }}
    >
      <span className="text-xl text-slate-100">Đăng nhập</span>

      <div className="flex flex-col gap-5">
        <input
          className="outline-none placeholder-slate-100 text-sm"
          style={{
            outline: "none",
            background: "none",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px,rgba(0, 0, 0, 0.23) 0px 6px 6px",
            border: "1px solid #d9d9d9",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
          placeholder="Tài khoản"
          onChange={(e) => {
            const { value } = e.target;
            setAccount(value);
          }}
          type="text"
        />

        <input
          className="outline-none placeholder-slate-100 text-sm"
          style={{
            outline: "none",
            background: "none",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px,rgba(0, 0, 0, 0.23) 0px 6px 6px",
            border: "1px solid #d9d9d9",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
          placeholder="Mật khẩu"
          onChange={(e) => {
            const { value } = e.target;
            setPassword(value);
          }}
          type="password"
        />
      </div>

      <div className="flex flex-row-reverse">
        <div
          onClick={() => submit()}
          style={{
            position: "relative",
            overflow: "hidden",
            transition: "background 400ms",
            color: "#fff",
            backgroundColor: "#6200ee",
            padding: "10px 20px",
            outline: 0,
            border: 0,
            borderRadius: "0.25rem",
            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
            display: "block",
            width: "fit-content",
          }}
        >
          <span className="select-none">Đăng nhập</span>
        </div>
      </div>
    </div>
  );
};
