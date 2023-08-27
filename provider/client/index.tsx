import { ClientNavigator } from "./navigation";
interface ClientProviderComponentProps {
  children: React.ReactNode;
}

export const ClientProviderComponent = (
  props: ClientProviderComponentProps
) => {
  const { children } = props;

  return (
    <main
      className="min-h-screen bg-gradient-light dark:bg-gradient-dark"
      style={{
        transition: "all ease .3s",
      }}
    >
      <ClientNavigator />
      {children}
    </main>
  );
};
