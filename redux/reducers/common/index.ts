import { createSlice } from "@reduxjs/toolkit";
import { CommonSliceInterface } from "./interface";

const initialState: CommonSliceInterface = {
  isLogin: false,
  globalLoading: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
});

export const {} = commonSlice.actions;

export default commonSlice.reducer;
