"use client";

"use client";
import dynamic from "next/dynamic";

const ClientContentFilterDesktopComponent = dynamic(
  () =>
    import("./desktop").then((mod) => mod.ClientContentFilterDesktopComponent),
  {
    loading: () => <p className="md:block  hidden">Loading...</p>,
    ssr: false,
  }
);

const ClientContentFilterMobileComponent = dynamic(
  () =>
    import("./mobile").then((mod) => mod.ClientContentFilterMobileComponent),
  {
    loading: () => <p className="block  md:hidden">Loading...</p>,
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
