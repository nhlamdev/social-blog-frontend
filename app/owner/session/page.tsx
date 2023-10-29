import { HistoryLoginTable } from "@/components/table/history-login";

export default function SessionPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Phiên đăng nhập
      </span>

      <HistoryLoginTable />
    </div>
  );
}
