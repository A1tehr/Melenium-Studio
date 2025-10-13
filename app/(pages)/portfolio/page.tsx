import { FC } from "react";
import { PortfolioPage } from "./Portfolio";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "WebMelenium Studio | Портфолио",
  description:
      "Эффективные веб-сайты и лучшие решения для вашего бизнеса!",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
