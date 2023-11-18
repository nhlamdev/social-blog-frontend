import { getDateTime } from "@/utils/global-func";
import { MEMBER_ROLE } from "@/constant";
import { authApi } from "@/api/auth";
import { ChangeEvent } from "react";
import { enqueueSnackbar } from "notistack";

interface IOwnerMember {
  _id: string;
  name: string;
  email: string;
  image: string;
  role_owner: boolean;
  role_author: boolean;
  role_comment: boolean;
  created_at: string;
  content_count: number;
}

interface OwnerMemberRowProps {
  item: IOwnerMember;
  reload: () => void;
}
export const OwnerMemberRow = (props: OwnerMemberRowProps) => {
  const { item, reload } = props;

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;

    authApi
      .updateRole(item._id, name, checked)
      .then(() => reload())
      .catch((error) => {
        if (Array.isArray(error?.response?.data?.message)) {
          error?.response?.data?.message.forEach((item: any) => {
            enqueueSnackbar(item, {
              variant: "error",
            });
          });
        } else {
          enqueueSnackbar(
            error?.response ? error.response.data?.message : error.message,
            {
              variant: "error",
            }
          );
        }
      });
  };

  return (
    <tr
      className="border-b border-gray-200 
  dark:hover:bg-gray-600 hover:bg-gray-100 hover:bg-opacity-40"
    >
      <td className="py-3 px-6 text-center whitespace-nowrap flex flex-row gap-2">
        <picture>
          <img
            style={{ objectFit: "cover" }}
            className="w-8 h-8 rounded-full aspect-square"
            src={`/service/${item.image}`}
            alt="Rounded avatar"
          />
        </picture>

        <div className="flex flex-col w-full gap-1">
          <span className="font-medium lg:text-sm text-xs w-full text-left select-none">
            {item.name}
          </span>
          <span className="font-light lg:text-sm text-xs w-full text-left select-none">
            {item.email}
          </span>
        </div>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-center lg:text-sm text-xs">
          {item.content_count}
        </span>
      </td>
      <td className=" py-3 px-6">
        <div className="flex flex-row justify-center gap-2">
          <input
            id="default-checkbox"
            type="checkbox"
            title="Quyền bình luận."
            name="comment"
            checked={item.role_comment}
            onChange={(e) => change(e)}
            style={{ cursor: "pointer" }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            id="default-checkbox"
            type="checkbox"
            title="Quyền đăng bài."
            name="author"
            checked={item.role_author}
            onChange={(e) => change(e)}
            style={{ cursor: "pointer" }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            id="default-checkbox"
            type="checkbox"
            name="owner"
            title="Quyền toàn cục."
            checked={item.role_owner}
            onChange={(e) => change(e)}
            style={{ cursor: "pointer" }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-right lg:text-sm text-xs">
          {getDateTime(item.created_at)}
        </span>
      </td>
    </tr>
  );
};
