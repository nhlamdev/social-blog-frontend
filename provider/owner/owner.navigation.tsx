import { LogoutBtn, ThemeToggleButton } from "@/components/custom";
import { IProfile } from "@/interface";
import Link from "next/link";
import { navigation_mock } from "./nav.mock";

interface OwnerNavigationProps {
  profile: IProfile;
}

export const OwnerNavigation = (props: OwnerNavigationProps) => {
  const { profile } = props;

  return (
    <nav
      className="h-fit m-1 rounded-md gap-2 bg-slate-200 shadow-md
  bg-opacity-40 p-4 min-w-fit shadow-slate-600 dark:shadow-slate-800"
    >
      <div className="px-2 py-1 flex flex-row items-center justify-between">
        <span className="dark:text-slate-100 text-slate-800 font-semibold">
          Trang quản lý
        </span>

        <picture>
          <img
            src={`${profile.image}`}
            className="rounded-full w-8 h-8  shadow-lg"
            style={{ border: "2px solid black" }}
            alt="photo"
          />
        </picture>
      </div>

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
                key={`item-navigation-${key}`}
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
                <item.icon className="dark:text-slate-100 text-slate-800 group-hover:transition-transform scale-125 -translate-x-2" />
                <span className="dark:text-slate-100 text-slate-800">
                  {item.name}
                </span>
              </Link>
            );
          })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ThemeToggleButton />

        <LogoutBtn />
      </div>
    </nav>
  );
};
