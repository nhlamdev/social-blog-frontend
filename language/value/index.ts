import { en } from "./en";
import { vi } from "./vi";

interface ILanguage {
  vi: {
    [key: string]: string;
  };
  en: {
    [key: string]: string;
  };
}

export const languages: ILanguage = {
  en,
  vi,
};
