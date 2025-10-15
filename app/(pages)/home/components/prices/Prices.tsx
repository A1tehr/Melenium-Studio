// React
import { FC } from "react";
// Styles
import s from "./styles/Prices.module.scss";
import "atropos/css";
// Animations
import { motion } from "framer-motion";
// Icons
import { Check } from "lucide-react";
// Components
import { ButtonGradient } from "@/app/components/UI/Button/ButtonGradient";
import Atropos from "atropos/react";
// Marquee
import Marquee from "react-fast-marquee";

export const Prices: FC = ({}) => {
  const DATA_CARDS = [
    {
      title: "W-Start",
      price: "28 500₽",
      info: "Этот вариант для тех, у кого нет времени на разработку сайта.",
      features: [
        {
          text: "Базовый дизайн",
        },
        {
          text: "2 страницы",
        },
        {
          text: "Адаптивный вид",
        },
      ],
    },
    {
      title: "W-Base",
      price: "47 500₽",
      info: "Этот вариант для тех, у кого нет времени на разработку сайта.",
      features: [
        {
          text: "Простой дизайн",
        },
        {
          text: "3 страницы",
        },
        {
          text: "Адаптивный вид",
        },
      ],
    },
    {
      title: "W-Growth",
      price: "66 500₽",
      info: "Лучший выбор для тех, кому нужен сайт в корпоративном стиле с учетом специфики их бизнес-ниши.",
      features: [
        {
          text: "Продвинутый дизайн",
        },
        {
          text: "4 страницы",
        },
        {
          text: "Адаптивный вид",
        },
      ],
    },
    {
      title: "W-Ultimate",
      price: "104 500₽",
      info: "Эксклюзивный дизайн для тех, кто хочет максимально выделиться среди конкурентов.",
      features: [
        {
          text: "Эксклюзивный дизайн",
        },
        {
          text: "6 страниц",
        },
        {
          text: "Адаптивный вид",
        },
      ],
    },
    {
      title: "E-commerce",
      price: "80 750₽",
      info: "Этот вариант для тех, кто ищет интернет-магазин с простым управлением.",
      features: [
        {
          text: "Продвинутый дизайн",
        },
        {
          text: "4 страницы + страницы магазина",
        },
        {
          text: "Адаптивный вид",
        },
      ],
    },
  ];
  const DATA_ITEMS_MARQUEE = [
    { img: "/Integrations/lg.svg" },
    { img: "/Integrations/amoCRM.svg" },
    { img: "/Integrations/WhatsApp.svg" },
    { img: "/Integrations/tg.svg" }
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
    <section className={`${s.Prices} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.Header}
          >
            <motion.h3 variants={animation} custom={1} className="text-green">
              Наши цены
            </motion.h3>
            <motion.h2
              variants={animation}
              custom={2}
              className="text-black dark:text-white"
            >
              Сколько стоит сайт?
            </motion.h2>
            <motion.p variants={animation} custom={3} className="text-gray">
              Мы предлагаем пять тарифных планов в зависимости от ваших потребностей.
            </motion.p>
          </motion.section>
          <section className={s.Cards}>
            {DATA_CARDS.map((card, i) => (
              <Atropos
                rotateTouch={false}
                highlight={false}
                shadow={false}
                className="bg-transparent"
                key={i}
              >
                <motion.article
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: "some", once: true }}
                  variants={animation}
                  custom={i}
                  className={`${s.Card} rounded-lg border-1 border-gray/10 bg-white dark:bg-black_secondary`}
                >
                  <h5 className="text-black dark:text-white">{card.title}</h5>
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-green">
                    {card.price}
                  </h4>
                  <p className="text-gray">{card.info}</p>
                  <ul className={s.Features}>
                    {card.features.map((item, i) => (
                      <li key={i}>
                        <i>
                          <Check
                            strokeWidth={2}
                            className="text-blue dark:text-green"
                            size={18}
                          />
                        </i>
                        <p className="text-black dark:text-white">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <ButtonGradient
                    radius="sm"
                    size="md"
                    value="Заказать сайт"
                  />
                </motion.article>
              </Atropos>
            ))}
          </section>
          <section className={s.Integrations}>
            <h4 className="text-gray ">
              Можно подключить следующие интеграции:{" "}
            </h4>
            <Marquee autoFill className={s.marquee} speed={50}>
              <div className={s.introMarquee}>
                {DATA_ITEMS_MARQUEE.map((item, i) => (
                    <div
                        className="opacity-20"
                        key={i}
                        style={{
                          display: 'flex',
                          justifyContent: 'center', // выравнивание по горизонтали
                          alignItems: 'center',     // выравнивание по вертикали (если нужно)
                        }}
                    >
                      <img
                          src={item.img}
                          alt=""
                          height={50}
                          style={{ maxHeight: '50px' }}
                      />
                    </div>
                ))}
              </div>
            </Marquee>
          </section>
        </section>
      </div>
    </section>
  );
};
