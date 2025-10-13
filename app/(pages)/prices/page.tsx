// React
import { FC } from "react";
// Next
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "WebMelenium Studio | Цены",
  description:
    "Эффективные веб-сайты и лучшие решения для вашего бизнеса!",
};
// Components
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";
import { Table } from "./components/Table/Table";
import { BannerSendRequest } from "@/app/components/BannerSendRequest/BannerSendRequest";
import { Card } from "./components/Card/Card";

const Prices: FC = ({}) => {
  return (
    <>
      <TitleBannerPage
        title="Сколько стоит сайт?"
        supTitle="Наши цены"
        text="Мы предлагаем пять тарифных планов в зависимости от ваших потребностей."
      />
      <Table />
      <Card />
      <BannerSendRequest />
    </>
  );
};

export default Prices;
