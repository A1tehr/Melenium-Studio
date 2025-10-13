import { FC } from "react";
import { CookieSettingsPage } from "./CookieSettings";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "WebMelenium Studio | Кукисы",
  description:
      "Эффективные веб-сайты и лучшие решения для вашего бизнеса!",
};

export default function CookieSettings() {
  return <CookieSettingsPage />;
}
