import { ClientProviderComponent } from "@/provider";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout(props: ClientLayoutProps) {
  const { children } = props;

  return <ClientProviderComponent>{children}</ClientProviderComponent>;
}
