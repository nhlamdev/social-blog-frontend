import Cookies from "js-cookie";
import { languages } from "./value";

export const clientMappingLanguage = (key: string) => {
  const locale = Cookies.get("locale");
  const l = (locale && ["vi", "en"].includes(locale) ? locale : "unset") as
    | "vi"
    | "en"
    | "unset";

  if (l === "unset") {
    return "...";
  } else {
    return languages[l][key];
  }
};
