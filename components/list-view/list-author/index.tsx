import { ListViewAuthorsItem } from "./item";

interface IListViewAuthors {
  members: any[];
}
export const ListViewAuthors = (props: IListViewAuthors) => {
  const { members } = props;
  return (
    <div className="flex flex-col w-full md:w-3/5 gap-2 flex-1">
      {members.map((member: any) => {
        return <ListViewAuthorsItem key={member._id} member={member} />;
      })}
    </div>
  );
};
