"use client";
import { ClientHomeHeaderDesktop } from "./desktop";
import { ClientHomeHeaderMobile } from "./mobile";

export const ClientHead = () => {
  return (
    <>
      <ClientHomeHeaderDesktop />
      <ClientHomeHeaderMobile />
    </>
  );
};
