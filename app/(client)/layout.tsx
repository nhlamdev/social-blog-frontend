import { ClientProviderComponent } from "@/provider";
import Image from "next/image";
interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout(props: ClientLayoutProps) {
  const { children } = props;

  return <ClientProviderComponent>{children}</ClientProviderComponent>;
}
