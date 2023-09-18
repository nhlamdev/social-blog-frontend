import { OwnerProviderComponent } from "@/provider";
import { navigation_mock } from "./nav.mock";
import Link from "next/link";
import { LogoutBtn, ThemeToggleButton } from "@/components/custom";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const backend = process.env.SERVICE_PORT;

interface OwnerLayoutProps {
  children: React.ReactNode;
}

export default async function OwnerLayout(props: OwnerLayoutProps) {
  const { children } = props;

  let profile;
  try {
    const { data } = await axios.get(`http://localhost:${backend}/profile`, {
      headers: {
        Cookie: cookies().toString(),
      },
    });

    profile = data;
  } catch (error: any) {
    redirect("/auth");
  }

  if (profile.role !== "owner") {
    redirect("/");
  }

  return (
    <div></div>
    // <OwnerProviderComponent>
    //   <main
    //     className="min-h-screen bg-gradient-light dark:bg-gradient-dark"
    //     style={{ display: "flex", flexDirection: "row" }}
    //   >
    //     <nav
    //       className="h-fit m-1 rounded-md gap-2 bg-slate-200 shadow-md
    //       bg-opacity-40 p-4 min-w-fit shadow-slate-600 dark:shadow-slate-800"
    //     >
    //       <div className="px-2 py-1 flex flex-col justify-center">
    //         <span className="dark:text-slate-100 text-slate-800 font-semibold">
    //           Trang quản lý
    //         </span>
    //       </div>

    //       <div className="p-2 g-2">
    //         {navigation_mock.map((item, key) => {
    //           return (
    //             <Link
    //               href={item.url}
    //               key={`item-navigation-${key}`}
    //               className="group px-10 py-4  hover:bg-slate-400
    //                   duration-300 transition-all ease-in-out rounded-md
    //                   font-medium text-sm gap-2"
    //               style={{
    //                 cursor: "pointer",
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 alignItems: "center",
    //               }}
    //             >
    //               <item.icon className="dark:text-slate-100 text-slate-800 group-hover:transition-transform scale-125 -translate-x-2" />
    //               <span className="dark:text-slate-100 text-slate-800">
    //                 {item.name}
    //               </span>
    //             </Link>
    //           );
    //         })}
    //       </div>

    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           alignItems: "center",
    //           justifyContent: "space-between",
    //         }}
    //       >
    //         <ThemeToggleButton />

    //         <LogoutBtn />
    //       </div>
    //     </nav>
    //     {children}
    //   </main>
    // </OwnerProviderComponent>
  );
}
