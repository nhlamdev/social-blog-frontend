import { ListViewItem } from "./item";

interface OwnerCategoryListViewProps {
  categories: any[];
}

export const OwnerCategoryListView = (props: OwnerCategoryListViewProps) => {
  const { categories } = props;

  return (
    <div className="flex flex-col gap-2 w-full items-center h-full">
      {categories.map((v: any) => {
        return <ListViewItem key={v._id} item={v} />;
      })}
    </div>
  );
};
