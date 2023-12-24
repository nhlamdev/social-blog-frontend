import { VisualizeComponent } from "@/components/visualize";

export default async function OwnerMemberDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold dark:text-slate-100 text-slate-900">
        Tổng quang
      </span>
      <VisualizeComponent />
    </div>
  );
}
