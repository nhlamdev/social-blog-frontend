import { OwnerCategoryAction } from "@/components/form";

export default function CreateCategoryPage() {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4">
      <span className="text-center text-xl font-semibold dark:text-slate-200 text-slate-800">
        Tạo mới thể loại
      </span>

      <OwnerCategoryAction />
    </div>
  );
}
