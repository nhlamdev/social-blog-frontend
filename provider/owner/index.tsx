import { OwnerNavigation } from "./owner.navigation";

interface OwnerProviderComponentProps {
  children: React.ReactNode;
}

export const OwnerProviderComponent = (props: OwnerProviderComponentProps) => {
  const { children } = props;
  return (
    <main>
      <OwnerNavigation />
      {children}
    </main>
  );
};
