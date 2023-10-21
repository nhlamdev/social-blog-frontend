"use client";
import { getDateTime } from "@/utils/global-func";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { apiCaller } from "@/api";
import { useRouter } from "next/navigation";

interface OwnerContentRowProps {
  item: any;
}

export const OwnerContentRow = (props: OwnerContentRowProps) => {
  const { item } = props;
  const route = useRouter();

  return (
    <tr
      className="border-b border-gray-200
    dark:hover:bg-gray-600 hover:bg-gray-100 hover:bg-opacity-40"
    >
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-left lg:text-sm text-xs whitespace-nowrap">
          {item.title}
        </span>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-center lg:text-sm text-xs whitespace-nowrap">
          {getDateTime(item.created_at)}
        </span>
      </td>
      <td className="py-3 px-6 flex items-center justify-center">
        <div>
          <span
            className={`font-semibold text-md px-6 rounded-md text-slate-100 ${
              item.complete ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </div>
      </td>
      <td className="py-3 px-6 text-right">
        <div className="flex items-center justify-end gap-4">
          <Link href={`/owner/content/${item._id}`}>
            <FaEdit
              className="text-yellow-500"
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          </Link>

          <MdOutlineRemoveCircle
            className="text-red-500"
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={async () => {
              await apiCaller.contentApi.remove(item._id);
              route.refresh();
            }}
          />
        </div>
      </td>
    </tr>
  );
};
