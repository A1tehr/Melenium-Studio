// React
import { FC } from "react";
// Components
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "WebMelenium Studio | Контакты",
  description:
      "Эффективные веб-сайты и лучшие решения для вашего бизнеса!",
};

const Contacts: FC = ({}) => {
  return (
    <>
      <TitleBannerPage
        supTitle="Наши контакты"
        text="Заполните форму, и мы свяжемся с вами в ближайшее время, чтобы помочь выбрать лучший тарифный план и обсудить все нюансы."
        title="Хотите заказать новый сайт?"
      />
      <section className="bg-white dark:bg-black py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              Контактная информация
            </h2>
            <div className="space-y-6 text-gray">
              <div className="bg-gray/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Юридическая информация
                </h3>
                <p className="mb-2">
                  <span className="font-semibold">Название:</span> ИП Меленчук Алексей Артемович
                </p>
                <p>
                  <span className="font-semibold">ИНН:</span> 784303134201
                </p>
              </div>

              <div className="bg-gray/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Связь с нами
                </h3>
                <p className="mb-2">
                  <span className="font-semibold">Телефон:</span>{" "}
                  <a
                    href="tel:+79507600891"
                    className="text-blue dark:text-green hover:underline"
                  >
                    +7-950-760-08-91
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:alexey.melenchuk@gmail.com"
                    className="text-blue dark:text-green hover:underline"
                  >
                    alexey.melenchuk@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
