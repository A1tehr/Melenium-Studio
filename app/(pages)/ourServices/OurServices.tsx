"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/OurServices.module.scss";
// Animations
import { motion } from "framer-motion";
// Components
import { Tabs, Tab } from "@nextui-org/react";
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";
import { BannerSendRequest } from "@/app/components/BannerSendRequest/BannerSendRequest";
// Icons
import { Check } from "lucide-react";
// Next
import Image from "next/image";

export const OurServicesPage: FC = () => {
  const DATA_TABS = [
    {
      title_tab: "Лендинги",
      image: "/OurServices/img.jpg",
      content: {
        title: "Посадочные страницы для запуска рекламы",
        info: "Одностраничные сайты, созданные по всем правилам эффективных лендингов.",
        features: [
          {
            value:
              "Идеально подходят для запуска платной рекламы в социальных сетях и Google Ads.",
          },
          {
            value:
              "Удобны для быстрого тестирования ваших гипотез и анализа потребительского спроса.",
          },
          {
            value:
              "Яркие, простые, не перегруженные лишней информацией. Разработка занимает около 10 дней.",
          },
        ],
      },
    },
    {
      title_tab: "Многостраничные сайты",
      image: "/OurServices/Multi-site.jpg",
      content: {
        title: "Расскажите потенциальным клиентам о себе",
        info: "Закажите большой стильный сайт, который познакомит вашу аудиторию с вашими услугами и продуктами.",
        features: [
          {
            value:
              "Вы можете получить больше бесплатного органического трафика из результатов поиска с оптимизированным контентом.",
          },
          {
            value:
              "Повысьте узнаваемость бренда и лояльность пользователей с помощью большого, стильного и функционального сайта.",
          },
          {
            value:
              "Отличная возможность для вас подробно рассказать о каждом виде ваших товаров и/или услуг.",
          },
        ],
      },
    },
    {
      title_tab: "Интернет-магазины",
      image: "/OurServices/StoreImg.jpg",
      content: {
        title: "Начните продавать товары и услуги онлайн!",
        info: "Принимайте заказы и платежи через стильный и функциональный интернет-магазин.",
        features: [
          {
            value:
              "Количество товаров в интернет-магазине не ограничено. Мы помогаем с первоначальной настройкой и добавляем ваши товары.",
          },
          {
            value:
              "Карточки товаров могут быть оптимизированы для SEO для продвижения в результатах поиска Google.",
          },
          {
            value:
              "С помощью простого интерфейса вы сможете легко добавлять новые товары и вносить любые изменения самостоятельно в будущем.",
          },
        ],
      },
    },
  ];

  // Animation
  const animation = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <>
      <TitleBannerPage
        title="Наши услуги"
        supTitle="Что мы разрабатываем"
        text="Мы разрабатываем сайты любой сложности: от простых одностраничных до интернет-магазинов. Неизменным остается одно: качество нашей работы и внимание к деталям."
      />
      <section className={`${s.OurServices} bg-white dark:bg-black`}>
        <div className="container">
          <section className={s.Wrapper}>
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={s.Header}
            >
              <motion.h3 variants={animation} custom={1} className="text-green">
                Наши решения
              </motion.h3>
              <motion.h2
                variants={animation}
                custom={2}
                className="text-black dark:text-white"
              >
                Типы сайтов, которые мы создаем
              </motion.h2>
              <motion.p variants={animation} custom={3} className="text-gray">
                От простых лендингов до сложных интернет-магазинов — мы реализуем
                проекты любой сложности с учетом специфики вашего бизнеса.
              </motion.p>
            </motion.section>
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={animation}
              className={s.Content}
            >
              <Tabs
                classNames={{
                  base: "mb-5 border-b-1 border-gray/20 grid justify-center",
                  cursor: "w-full bg-green",
                  panel: `${s.Tab} bg-white shadow-lg p-10 rounded-lg dark:shadow-2xl dark:bg-black_secondary/40`,
                  tab: "py-8 text-sm sm:text-base font-normal",
                  tabContent:
                    "text-gray group-data-[selected=true]:text-green dark:group-data-[selected=true]:text-white",
                  tabList: "p-0",
                }}
                items={DATA_TABS}
                fullWidth
                size="lg"
                variant="underlined"
              >
                {DATA_TABS.map((tab, i) => (
                  <Tab key={i} title={tab.title_tab}>
                    <figure>
                      <Image
                        src={tab.image}
                        alt="Image"
                        width={495}
                        height={320}
                      />
                    </figure>
                    <article>
                      <div>
                        <h3>{tab.content.title}</h3>
                        <p className="text-gray">{tab.content.info}</p>
                      </div>
                      <ul>
                        {tab.content.features.map((item, i) => (
                          <li className="text-black dark:text-white" key={i}>
                            <i className="text-blue dark:text-green">
                              <Check strokeWidth={2} size={18} />
                            </i>
                            {item.value}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Tab>
                ))}
              </Tabs>
            </motion.section>
          </section>
        </div>
      </section>
      <BannerSendRequest />
    </>
  );
};
