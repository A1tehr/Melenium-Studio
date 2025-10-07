// React
import { FC } from "react";
// Styles
import s from "./styles/Additions.module.scss";
import "atropos/css";
// Components
import Atropos from "atropos/react";
// Animations
import { motion } from "framer-motion";
// Icons
import { AiFillApple, AiFillCopy } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { BsCardImage } from "react-icons/bs";
import { SiCampaignmonitor } from "react-icons/si";

export const Additions: FC = ({}) => {
  const DATA_CARDS = [
    {
      icon: <AiFillApple />,
      title: "Корпоративный логотип",
      info: "Вам нужно разработать новый логотип или переделать старый? Наш опытный дизайнер с радостью позаботится об этом.",
      price: "$100 за 1 логотип",
    },
    {
      icon: <AiFillCopy />,
      title: "Копирайтинг",
      info: "Мы предлагаем профессиональный текстовый контент для вашего сайта. От текстов для лендингов до экспертных статей для блога.",
      price: "$15 за 100 слов",
    },
    {
      icon: <FaUserSecret />,
      title: "Часы веб-мастера",
      info: "Наш технический специалист поможет с любыми интеграциями и дальнейшими улучшениями вашего сайта.",
      price: "$75 за 5 часов",
    },
    {
      icon: <IoIosCart />,
      title: "Добавление товаров",
      info: "Мы поможем заполнить ваш сайт товарами и добавить категории и мета-теги для каждого товара и раздела.",
      price: "от $1 за товар",
    },
    {
      icon: <BsCardImage />,
      title: "Подбор изображений",
      info: "Мы можем тщательно подобрать высококачественные и небанальные изображения и заполнить ими ваш сайт.",
      price: "$5 за изображение",
    },
    {
      icon: <SiCampaignmonitor />,
      title: "Перенос сайта",
      info: "Мы поможем перенести ваш сайт на новую платформу, сохраняя ваш дизайн и позиции в поисковых системах максимально.",
      price: "цена договорная",
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
    <section className={`${s.Additions} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.Header}
          >
            <motion.h3 variants={animation} custom={1} className="text-green">
              Что еще мы можем сделать?
            </motion.h3>
            <motion.h2
              variants={animation}
              custom={2}
              className="text-black dark:text-white"
            >
              Дополнительные услуги
            </motion.h2>
            <motion.p variants={animation} custom={3} className="text-gray">
              WebMelenium Studio может взять на себя всю работу по продвижению,
              управлению контентом и улучшению сайта, которые не входят в ваш
              тарифный план.
            </motion.p>
          </motion.section>
          <section className={s.Cards}>
            {DATA_CARDS.map((card, i) => (
              <Atropos
                rotateTouch={false}
                key={i}
                shadow={false}
                className="bg-transparent"
              >
                <motion.article
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: "some", once: true }}
                  variants={animation}
                  custom={i}
                  className={`${s.Card} shadow-sm border-1 border-gray/10 bg-gray_light/30 dark:bg-black_secondary`}
                >
                  <div className={s.icon}>
                    <span className="bg-gradient-to-br from-blue to-green text-white">
                      {card.icon}
                    </span>
                  </div>
                  <h4 className="text-black dark:text-white">{card.title}</h4>
                  <p className="text-gray">{card.info}</p>
                  <p className={`${s.price} text-green`}>{card.price}</p>
                </motion.article>
              </Atropos>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};
