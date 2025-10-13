import { FC } from "react";
import { OurServicesPage } from "./OurServices";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "WebMelenium Studio | Наши услуги",
  description:
      "Эффективные веб-сайты и лучшие решения для вашего бизнеса!",
};

export default function OurServices() {
  return <OurServicesPage />;
}
