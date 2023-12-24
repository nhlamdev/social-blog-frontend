"use client";
import { apiCaller } from "@/api";
import { COLOR_THEME_CASE } from "@/constant";
import { store } from "@/redux/store";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { io } from "socket.io-client";
import { SWRConfig } from "swr";
import { ReduxInitProvider } from "./redux.provider";

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

  useEffect(() => {
    if (!document) {
      return;
    }

    const mode = localStorage.getItem(COLOR_THEME_CASE);

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: () => apiCaller.authApi.profile(),
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
      }}
    >
      <Provider store={store}>
        <ReduxInitProvider>
          <CacheProvider value={emotionCache}>
            <SnackbarProvider>{children}</SnackbarProvider>
          </CacheProvider>
        </ReduxInitProvider>
      </Provider>
    </SWRConfig>
  );
};
