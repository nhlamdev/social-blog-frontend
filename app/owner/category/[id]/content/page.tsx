import { PageProps } from "@/interface";
import { notFound } from "next/navigation";
import { OwnerListContentInCategory } from "./list-data";

// const backend = process.env.SERVICE_PORT;

export default function ContentInCategoryPage(props: PageProps) {
  // const [contents,setContents] = useState([])
  // const [count ,setCount] = useState(0)

  const { searchParams, params: queryParams } = props;

  const { id: categoryId } = queryParams;
  // const { page, search } = searchParams;

  // let contents: any;

  if (!categoryId) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 relative">
      <span className="text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
        Danh sách bài viết
      </span>

      <OwnerListContentInCategory
        categoryId={categoryId}
        searchParams={searchParams}
      />
    </div>
  );
}
