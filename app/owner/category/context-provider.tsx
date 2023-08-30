"use client";

import { Context, createContext, useState } from "react";

interface ProviderContextInterface {
  data: any[];
  loading: boolean;
  fetchData: (v: any[]) => void;
  changeLoading: (v: boolean) => void;
}

interface OwnerLayoutProps {
  children: React.ReactNode;
}

export const ComponentProvider = (props: OwnerLayoutProps) => {
  const { children } = props;

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const contextInit = {
    data: data,
    loading: loading,
    fetchData: (value: any[]) => setData(value),
    changeLoading: (loading: boolean) => setLoading(loading),
  };

  const ProviderContext = createContext(contextInit);

  return (
    <ProviderContext.Provider value={contextInit}>
      {children}
    </ProviderContext.Provider>
  );
};
