import { OwnerProviderComponent } from "@/provider";

const backend = process.env.SERVICE_PORT;

interface OwnerLayoutProps {
  children: React.ReactNode;
}

export default async function OwnerLayout(props: OwnerLayoutProps) {
  const { children } = props;

  return (
    <main
      className="min-h-screen bg-gradient-light dark:bg-gradient-dark"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <OwnerProviderComponent>{children}</OwnerProviderComponent>{" "}
    </main>
  );
}
