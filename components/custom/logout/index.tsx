"use client";

import { apiCaller } from "@/api";
import { useRouter } from "next/navigation";

export const LogoutBtn = () => {
  const router = useRouter();
  return (
    <div
      className="text-stone-600 bg-slate-900 dark:bg-cyan-600 px-4 py-2"
      style={{
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      onClick={() => {
        apiCaller.authApi.logout().then((res) => {
          router.replace("/");
        });
      }}
    >
      <span className="text-sm text-slate-200 font-semibold">Đăng xuất</span>
    </div>
  );
};
