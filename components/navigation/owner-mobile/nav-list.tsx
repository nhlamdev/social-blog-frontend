import { IProfile } from "@/interface";
import { navigation_mock } from "@/provider/owner/navigation/nav.mock";
import Link from "next/link";
interface IListNavItem {
  profile: IProfile;
}
export const ListNavItem = (props: IListNavItem) => {
  const { profile } = props;

  return (
    <div className="p-2 g-2">
      {navigation_mock
        .filter((v) => {
          if (profile.role.owner) {
            return true;
          } else {
            return !v.require_owner;
          }
        })
        .map((item, key) => {
          return (
            <Link
              href={item.url}
              key={`item-navigation-d-${key}`}
              className="group px-10 py-4  hover:bg-slate-400
        duration-300 transition-all ease-in-out rounded-md
        font-medium text-sm gap-2"
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <item.icon className="dark:text-slate-100 text-slate-900 group-hover:transition-transform scale-125 -translate-x-2" />
              <span className="dark:text-slate-100 text-slate-900">
                {item.name}
              </span>
            </Link>
          );
        })}
    </div>
  );
};
