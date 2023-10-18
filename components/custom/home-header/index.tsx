"use client";

import dynamic from "next/dynamic";

const ClientHomeHeaderDesktop = dynamic(
  () => import("./desktop").then((mod) => mod.ClientHomeHeaderDesktop),
  {
    loading: () => <p className="md:block  hidden">Loading...</p>,
    ssr: false,
  }
);

const ClientHomeHeaderMobile = dynamic(
  () => import("./mobile").then((mod) => mod.ClientHomeHeaderMobile),
  {
    loading: () => <p className="block  md:hidden">Loading...</p>,
    ssr: false,
  }
);

export const ClientHead = () => {
  return (
    <>
      <ClientHomeHeaderDesktop />
      <ClientHomeHeaderMobile />
    </>
  );
};
