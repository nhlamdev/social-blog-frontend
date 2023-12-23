import { en } from "./en";
import { vi } from "./vi";

export interface ILanguages {
  [key: string]: {
    [key: string]: string;
  };
}

export const languages: ILanguages = {
  en,
  vi,
};
