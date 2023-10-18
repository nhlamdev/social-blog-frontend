"use client";
import { ClientProviderComponent } from "@/provider";
import Image from "next/image";
interface ClientLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function ClientLayout(props: ClientLayoutProps) {
  const { children, params } = props;

  return <ClientProviderComponent>{children}</ClientProviderComponent>;
}
