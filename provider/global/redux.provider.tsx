import { useAppDispatch } from "@/hook/redux.hook";
import { changeTranslator } from "@/redux/reducers/common";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

interface ReduxInitProviderProps {
  children: React.ReactNode;
}

export const ReduxInitProvider = (props: ReduxInitProviderProps) => {
  const { children } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const lang = document.documentElement.lang;
    const action = changeTranslator({ lang });
    dispatch(action);
  }, [dispatch]);

  return children;
};
