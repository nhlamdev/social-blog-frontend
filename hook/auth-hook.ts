import { IProfile } from "@/interface";
import { authApi } from "@/api/auth";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

const HOURSE_TO_MILISECOND = 3000;

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: payload,
    error,
    mutate,
  } = useSWR("profile", {
    dedupingInterval: HOURSE_TO_MILISECOND,
    revalidateOnFocus: true,
    ...options,
  });

  async function logout() {
    await authApi.logout();

    mutate({}, false);
  }

  const firstLoading = payload === undefined && error === undefined;

  return {
    profile: payload?.data as IProfile,
    error,
    firstLoading,
    logout,
  };
}
