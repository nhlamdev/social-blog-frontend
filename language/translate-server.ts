import { cookies } from "next/headers";
import { languages } from "./value";

export const serverTranslate = () => {
  const locale = cookies().get("locale")?.value;
  const l = locale && locale === "vi" ? "vi" : "en";

  return languages[l];
};
