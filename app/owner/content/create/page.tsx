import { FormContentAction } from "@/components/form";

export default function OwnerContentCreatePage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Thêm mới bài viết
      </span>

      <FormContentAction />
    </div>
  );
}
