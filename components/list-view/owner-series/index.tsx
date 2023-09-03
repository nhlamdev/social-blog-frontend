import { ListViewItem } from "./item";

interface OwnerSeriesListViewProps {
  series: any[];
}

export const OwnerSeriesListView = (props: OwnerSeriesListViewProps) => {
  const { series } = props;

  return (
    <div className="flex flex-col gap-2 w-full items-center h-full">
      {series?.map((v: any) => {
        return <ListViewItem key={v._id} item={v} />;
      })}
    </div>
  );
};
