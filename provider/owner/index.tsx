"use client";
import { useAuth } from "@/hook/auth-hook";
import { OwnerNavigation } from "./owner.navigation";
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

  if (!profile || profile.role === "member") {
    redirect("/");
  }

  return (
    <>
      <OwnerNavigation profile={profile} />
      {children}
    </>
  );
};
