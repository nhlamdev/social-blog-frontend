"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { languages } from "./value";

export type TypeLanguagesKeys = "vi" | "en";
export const languagesKeys: string[] = ["vi", "en"];

export const useClientTranslates = (): { [key: string]: string } | null => {
  const [translate, setTranslate] = useState<{ [key: string]: string } | null>(
    null
  );

  useEffect(() => {
    const locale = Cookies.get("locale");

    const l = (
      locale && languagesKeys.includes(locale) ? locale : "en"
    ) as TypeLanguagesKeys;

    setTranslate(languages[l]);
  }, []);

  return translate;
};
