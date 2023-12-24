import { ClientBookMarkListView } from "@/components/list-view/list-client-bookmark";
import { PageProps } from "@/interface";

export default function ContentsBookmarkPage(props: PageProps) {
  const { searchParams } = props;
  return (
    <div className="min-h-screen flex flex-col w-full p-4 items-center gap-4 ">
      <ClientBookMarkListView searchParams={searchParams} />
    </div>
  );
}
