import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import commonSlice from "./reducers/common";

export const store = configureStore({
  reducer: { common: commonSlice },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
