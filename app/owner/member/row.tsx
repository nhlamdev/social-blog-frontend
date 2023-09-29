import { getDateTime } from "@/utils/global-func";
import Image from "next/image";

interface OwnerMemberRowProps {
  item: any;
}
export const OwnerMemberRow = (props: OwnerMemberRowProps) => {
  const { item } = props;

  return (
    <tr
      className="border-b border-gray-200 
  dark:hover:bg-gray-600 hover:bg-gray-100 hover:bg-opacity-40"
    >
      <td className="py-3 px-6 text-center whitespace-nowrap flex flex-row gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{ objectFit: "cover" }}
          className="w-8 h-8 rounded-full"
          src={
            item.image
              ? `${item.image}`
              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          }
          alt="Rounded avatar"
        />

        <div className="flex flex-col">
          <span className="font-medium text-sm">{item.name}</span>
          <span className="font-light text-xs">{item.email}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span>20</span>
      </td>
      <td className="py-3 px-6 text-center">
        <span className={`font-semibold`}>{item.role}</span>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="font-semibold font-sm">
          {getDateTime(item.created_at)}
        </span>
      </td>
    </tr>
  );
};
