import { ILanguages } from "@/language/value";

export interface CommonSliceInterface {
  isLogin: Boolean;
  globalLoading: Boolean;
  translate: { [key: string]: string } | null;
}
