"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import { apiCaller } from "@/api";
import { SWRConfig } from "swr";
import { useEffect } from "react";
import { io } from "socket.io-client";

interface ProviderComponentProps {
  children: React.ReactNode;
}
export const ProviderComponent = (props: ProviderComponentProps) => {
  const emotionCache = createCache({ key: "css" });
  const { children } = props;

  useEffect(() => {
    const socket = io("http://localhost:4000");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: () => apiCaller.authApi.profile(),
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
      }}
    >
      <CacheProvider value={emotionCache}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </CacheProvider>
    </SWRConfig>
  );
};
