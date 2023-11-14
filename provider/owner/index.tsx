"use client";
import { useAuth } from "@/hook/auth-hook";
import { OwnerNavigationDesktop, OwnerNavigationMobile } from "./navigation";
import { redirect } from "next/navigation";
import { OwnerFullLoading } from "./loading";

interface OwnerProviderComponentProps {
  children: React.ReactNode;
}

export const OwnerProviderComponent = (props: OwnerProviderComponentProps) => {
  const { children } = props;

  const { firstLoading, profile } = useAuth();

  if (firstLoading) {
    return <OwnerFullLoading />;
  }

  if (!profile) {
    redirect("/");
  }

  return (
    <>
      <OwnerNavigationDesktop profile={profile} />
      <OwnerNavigationMobile profile={profile} />
      {children}
    </>
  );
};
