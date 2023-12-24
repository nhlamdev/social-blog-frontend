"use client";
import { useParams } from "next/navigation";
import { languages } from "./value";

export type TypeLanguagesKeys = "vi" | "en";
export const languagesKeys: string[] = ["vi", "en"];

export const useClientTranslate = (): { [key: string]: string } => {
  const params = useParams();

  const { locale } = params;

  const l = (
    locale && languagesKeys.includes(locale.toString())
      ? locale.toString()
      : "en"
  ) as TypeLanguagesKeys;

  return languages[l];
};
