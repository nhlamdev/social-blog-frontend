import Cookies from "js-cookie";
import { languages } from "./value";

export const clientMappingLanguage = (key: string) => {
  const locale = Cookies.get("locale");
  const l = locale && locale === "vi" ? "vi" : "en";

  return languages[l][key];
};
