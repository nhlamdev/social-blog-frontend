"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import { apiCaller } from "@/api";
import "react-quill/dist/quill.snow.css";
import { SWRConfig } from "swr";
interface ProviderComponentProps {
  children: React.ReactNode;
}
export const ProviderComponent = (props: ProviderComponentProps) => {
  const emotionCache = createCache({ key: "css" });
  const { children } = props;
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
