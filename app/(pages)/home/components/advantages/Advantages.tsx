// React
import { FC, useContext } from "react";
// Styles
import s from "./styles/Advantages.module.scss";
// Animations
import { motion } from "framer-motion";
// Icons
import { Gem, Crown, Rocket } from "lucide-react";
// Providers
import { useButtonScrollContext } from "@/providers/ButtonScroll";

export const Advantages: FC = ({}) => {
  const { targetRef } = useContext(useButtonScrollContext);
  const DATA_CARDS = [
    {
      icon: <Gem strokeWidth={1.5} size={24} />,
      title: "Сайты для бизнеса",
      content:
        "Цель любого бизнеса — увеличение продаж. Наша задача — помочь вам в этом. Мы проводим глубокий анализ вашей ниши и создаем сайты, которые приносят прибыль и развивают ваш бизнес.",
    },
    {
      icon: <Crown strokeWidth={1.5} size={24} />,
      title: "Эксклюзивный дизайн",
      content:
        "Если у вас нет дизайна для вашего сайта, вы можете обратиться к нам, и наш UI-дизайнер создаст тщательно проработанный интуитивно понятный сайт с уникальным дизайном. Мы говорим «нет» шаблонным решениям.",
    },
    {
      icon: <Rocket strokeWidth={1.5} size={24} />,
      title: "Безграничные возможности",
      content:
        "Мы создаем сайты любой сложности: от лендингов до интернет-магазинов. В качестве подарка после создания сайта вы получите 3 месяца помощи нашего специалиста для дальнейших изменений и улучшений вашего сайта.",
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
    <section
      ref={targetRef}
      className={`${s.Advantages} bg-white dark:bg-black`}
    >
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.Header}
          >
            <motion.h3 variants={animation} custom={1} className="text-green">
              Наши преимущества
            </motion.h3>
            <motion.h2
              variants={animation}
              custom={2}
              className="text-black dark:text-white"
            >
              Решения, которые работают на ваш успех
            </motion.h2>
            <motion.p variants={animation} custom={3} className="text-gray">
              Работая с WebMelenium Studio, вы получаете не просто красивый сайт.
              Мы находим эксклюзивные решения ваших проблем и предлагаем широкий
              спектр услуг.
            </motion.p>
          </motion.section>
          <section className={s.Content}>
            {DATA_CARDS.map((card, i) => (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: "some", once: true }}
                variants={animation}
                custom={i}
                className={`${s.Card} shadow bg-white dark:bg-black_secondary/40   `}
                key={i}
              >
                <div className={` text-white`}>{card.icon}</div>
                <h3 className="text-black dark:text-white">{card.title}</h3>
                <p className="text-gray">{card.content}</p>
              </motion.article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};
