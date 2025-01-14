import { ClientNavigatorDesktop } from "./navigation";
import { ClientNavigatorMobile } from "./navigation";

interface ClientProviderComponentProps {
  children: React.ReactNode;
}

export const ClientProviderComponent = (
  props: ClientProviderComponentProps
) => {
  const { children } = props;

  return (
    <main
      className="min-h-screen bg-gradient-light dark:bg-gradient-dark flex flex-col gap-2"
      style={{
        transition: "all ease .3s",
      }}
    >
      <ClientNavigatorDesktop />
      <ClientNavigatorMobile />
      {children}
    </main>
  );
};
