"use client";
import dynamic from "next/dynamic";
import { BaseLoading } from "..";

const ClientContentFilterDesktopComponent = dynamic(
  () =>
    import("./desktop").then((mod) => mod.ClientContentFilterDesktopComponent),
  {
    loading: () => (
      <div className="md:flex hidden flex-row justify-end w-full">
        <BaseLoading title="Đang tải bộ lọc" />
      </div>
    ),
    ssr: false,
  }
);

const ClientContentFilterMobileComponent = dynamic(
  () =>
    import("./mobile").then((mod) => mod.ClientContentFilterMobileComponent),
  {
    loading: () => (
      <div className="flex md:hidden flex-row justify-end w-full">
        <BaseLoading title="Đang tải bộ lọc" />
      </div>
    ),
    ssr: false,
  }
);

interface IClientContentFilter {
  searchParams: { [key: string]: string | undefined };
}

export const ClientContentFilter = (props: IClientContentFilter) => {
  const { searchParams } = props;
  return (
    <>
      <ClientContentFilterDesktopComponent searchParams={searchParams} />
      <ClientContentFilterMobileComponent searchParams={searchParams} />
    </>
  );
};
