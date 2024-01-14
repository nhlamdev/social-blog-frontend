import { getDateTime } from "@/utils/global-func";
import { MEMBER_ROLE } from "@/constant";
import { authApi } from "@/api-client/auth";
import { ChangeEvent, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { apiCaller } from "@/api-client";

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
  member: IOwnerMember;
  reload: () => void;
}
export const OwnerMemberRow = (props: OwnerMemberRowProps) => {
  const { member, reload } = props;

  const [loading,setLoading] = useState(false)

  console.log(member)

  const change = async (payload :{author:boolean,comment:boolean}) => {
   
    if(loading) {
      return
    }

    setLoading(true)

    try {
      await     apiCaller.memberApi
      .changeRole(member._id, payload)
    }catch (error:any) {
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
    }finally{
      setLoading(false)
      reload()
    }
 

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
            src={`/service/${member.image}`}
            alt="Rounded avatar"
          />
        </picture>

        <div className="flex flex-col w-full gap-1">
          <span className="font-medium lg:text-sm text-xs w-full text-left select-none">
            {member.name}
          </span>
          <span className="font-light lg:text-sm text-xs w-full text-left select-none">
            {member.email}
          </span>
        </div>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-center lg:text-sm text-xs">
          {member.content_count}
        </span>
      </td>
      <td className=" py-3 px-6">
        <div className="flex flex-row justify-center gap-2">
          <input
            id="default-checkbox"
            type="checkbox"
            title="Quyền bình luận."
            name="comment"
            checked={member.role_comment}
            onChange={(e) => {
              change({
                comment: e.target.checked,
                author: member.role_author,
              });
            }}
            style={{ cursor: "pointer" }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            id="default-checkbox"
            type="checkbox"
            title="Quyền đăng bài."
            name="author"
            checked={member.role_author}
            onChange={(e) => {
              change({
                comment: member.role_comment,
                author: e.target.checked,
              });
            }}
            style={{ cursor: "pointer" }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            id="default-checkbox"
            type="checkbox"
            name="owner"
            title="Quyền toàn cục."
            checked={member.role_owner}
            style={{ cursor: "pointer" }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </td>
      <td className="py-3 px-6">
        <span className="font-medium w-full block text-right lg:text-sm text-xs">
          {getDateTime(member.created_at)}
        </span>
      </td>
    </tr>
  );
};
