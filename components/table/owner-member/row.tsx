import { getDateTime } from "@/utils/global-func";
import { MEMBER_ROLE } from "@/constant";

interface IOwnerMember {
  name: string;
  email: string;
  image: string;
  role: "member" | "writer" | "developer" | "owner";
  created_at: string;
  content_count: number;
}

interface OwnerMemberRowProps {
  item: IOwnerMember;
}
export const OwnerMemberRow = (props: OwnerMemberRowProps) => {
  const { item } = props;

  const current_role = MEMBER_ROLE.find((v: any) => {
    return v.key === item.role;
  });

  console.log(current_role);

  return (
    <tr
      className="border-b border-gray-200 
  dark:hover:bg-gray-600 hover:bg-gray-100 hover:bg-opacity-40"
    >
      <td className="py-3 px-6 text-center whitespace-nowrap flex flex-row gap-2">
        <picture>
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
        </picture>

        <div className="flex flex-col">
          <span className="font-medium text-sm">{item.name}</span>
          <span className="font-light text-xs">{item.email}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span>{item.content_count}</span>
      </td>
      <td className=" py-3 px-6">
        <div className="flex justify-center">
          <div className="group relative w-fit">
            <span
              className="font-semibold cursor-pointer select-none py-1 px-2 text xs"
              style={{ border: "1px solid black", borderRadius: "10px" }}
            >
              {current_role ? current_role.value : ""}
            </span>

            <div
              className="absolute opacity-0 invisible flex flex-row bg-slate-100 rounded-md p-1
              group-hover:opacity-100 group-hover:visible"
              style={{
                right: "calc(100% + 4px)",
                top: 0,
                gap: "4px",
                transition: "all ease .3s",
              }}
            >
              {MEMBER_ROLE.filter((v) => {
                v.key === item.role;
              }).map((v) => {
                return (
                  <span
                    key={v.key}
                    className="font-semibold cursor-pointer select-none py-1 px-2 text-xs
                whitespace-nowrap hover:bg-cyan-200 rounded-sm"
                  >
                    {v.value}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="font-semibold font-sm">
          {getDateTime(item.created_at)}
        </span>
      </td>
    </tr>
  );
};
