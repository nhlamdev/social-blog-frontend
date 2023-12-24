interface ReduxInitProviderProps {
  children: React.ReactNode;
}

export const ReduxInitProvider = (props: ReduxInitProviderProps) => {
  const { children } = props;

  return children;
};
