// React
import { FC, useContext } from "react";
// Animations
import { motion } from "framer-motion";
//Styles
import s from "./styles/Hero.module.scss";
// Context
import { useButtonScrollContext } from "@/providers/ButtonScroll";
// Components
import { ButtonGradient } from "@/app/components/UI/Button/ButtonGradient";
// NextUI
import { Button } from "@nextui-org/react";
// Icons
import { IoIosArrowRoundForward } from "react-icons/io";
export const Hero: FC = ({}) => {
  const { scrollToElement } = useContext(useButtonScrollContext);
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
      className={`${s.Hero} bg-white dark:bg-black bg-[url('/bgAnim.svg')] bg-no-repeat bg-center bg-cover dark:bg-[url('/bgAnimDark.svg')] `}
    >
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-gray_light/20 dark:from-black dark:to-black_secondary/20"></div>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={s.Content}
          >
            <motion.h2
              custom={1}
              variants={animation}
              className="text-black dark:text-white "
            >
              <div className="bg-light_bg border-1 border-gray/20 rounded-full py-2 px-3 dark:bg-black_secondary">
                Эффективные веб-сайты и лучшие решения{" "}
                <span>для вашего бизнеса</span>
              </div>
            </motion.h2>
            <motion.h1
              custom={2}
              variants={animation}
              translate="no"
              className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-green "
            >
              WebMelenium Studio
            </motion.h1>
            <motion.p custom={3} variants={animation} className="text-gray">
              Мы разрабатываем для вас веб-сайты, используя самые современные технологии,
              которые действительно развивают ваш бизнес и приносят доход. Свяжитесь с нами
              прямо сейчас для получения дополнительной информации.
            </motion.p>
            <motion.div custom={4} variants={animation} className={s.Actions}>
              <ButtonGradient radius="full" size="md" value="Заказать сайт" />
              <Button
                onClick={scrollToElement}
                size="md"
                className="bg-transparent text-green"
              >
                Почему мы?
                <IoIosArrowRoundForward size={20} />
              </Button>
            </motion.div>
          </motion.section>
        </section>
      </div>
    </section>
  );
};
