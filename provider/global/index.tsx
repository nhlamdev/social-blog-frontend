"use client";
import { apiCaller } from "@/api-client";
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
import { MantineProvider, createTheme } from "@mantine/core";

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

  const theme = createTheme({});

  return (
    <SWRConfig
      value={{
        fetcher: () => apiCaller.memberApi.profile(),
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
      }}
    >
      <MantineProvider theme={theme}>
        <Provider store={store}>
          <ReduxInitProvider>
            <CacheProvider value={emotionCache}>
              <SnackbarProvider>{children}</SnackbarProvider>
            </CacheProvider>
          </ReduxInitProvider>
        </Provider>
      </MantineProvider>
    </SWRConfig>
  );
};
