import { createSlice } from "@reduxjs/toolkit";
import { CommonSliceInterface } from "./interface";
import { languages } from "@/language/value";

const initialState: CommonSliceInterface = {
  isLogin: false,
  globalLoading: false,
  translate: null,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    changeTranslator(
      state,
      action: {
        payload: { lang: string };
        type: string;
      }
    ) {
      const { lang } = action.payload;

      const locale = Object.keys(languages);
      if (locale.includes(lang)) {
        state.translate = languages[lang];
      } else {
        state.translate = languages["en"];
      }
    },
  },
});

export const { changeTranslator } = commonSlice.actions;

export default commonSlice.reducer;
