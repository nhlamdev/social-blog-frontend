import { apiCaller } from "@/api";
import { getDateTime } from "@/utils/global-func";
import { MdOutlineRemoveCircle } from "react-icons/md";

interface IContactRow {
  row: any;
  reload: () => void;
}

export const ContactRow = (props: IContactRow) => {
  const { row, reload } = props;
  return (
    <tr
      className="border-b border-gray-200
  dark:hover:bg-gray-600 hover:bg-gray-100 hover:bg-opacity-40"
    >
      <td className="py-3 px-6">
        <div className="flex flex-col">
          <span className="font-medium w-full block text-left lg:text-sm text-xs whitespace-nowrap">
            {row.title}
          </span>
          <span className="font-medium w-full block text-left lg:text-sm text-xs whitespace-nowrap">
            {row.description}
          </span>
        </div>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-center lg:text-sm text-xs whitespace-nowrap">
          {getDateTime(row.created_at)}
        </span>
      </td>

      <td className="py-3 px-6 text-center">
        <MdOutlineRemoveCircle
          className="text-red-500"
          style={{ fontSize: "24px", cursor: "pointer" }}
          onClick={async () => {
            await apiCaller.commonApi.removeContact(row._id);
            reload();
          }}
        />
      </td>
    </tr>
  );
};
