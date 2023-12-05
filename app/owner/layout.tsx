import { OwnerProviderComponent } from "@/provider";
import Link from "next/link";

interface OwnerLayoutProps {
  children: React.ReactNode;
}

export default async function OwnerLayout(props: OwnerLayoutProps) {
  const { children } = props;

  return (
    <main
      className="min-h-screen bg-gradient-light dark:bg-gradient-dark
       flex lg:flex-row flex-col"
    >
      <OwnerProviderComponent>{children}</OwnerProviderComponent>
    </main>
  );
}
