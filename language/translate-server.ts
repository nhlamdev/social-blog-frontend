import { cookies } from "next/headers";
import { languages } from "./value";

export const serverMappingLanguage = (key: string) => {
  const locale = cookies().get("locale")?.value;
  const l = locale && locale === "vi" ? "vi" : "en";
  return languages[l][key];
};
