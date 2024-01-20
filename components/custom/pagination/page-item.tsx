import Link from "next/link";
import { usePathname } from "next/navigation";

interface IPageItemComponent {
  page: number;
  href: string;
  isCurrent?: boolean;
}

export const PageItem = (props: IPageItemComponent) => {
  const { page, href, isCurrent } = props;

  return (
    <Link
      href={href}
      className={`rounded-md bg-slate-600 bg-opacity-40 size-8 flex 
      text-slate-900 dark:text-slate-100 items-center justify-center 
      hover:shadow-xl shadow-sm border-slate-800 dark:border-slate-200`}
      style={{
        border: isCurrent ? "2px solid" : "unset",
        boxSizing: "border-box",
        transition: "all ease .3s",
      }}
    >
      <span className="text-md font-semibold text-slate-900 dark:text-slate-100">
        {page}
      </span>
    </Link>
  );
};
