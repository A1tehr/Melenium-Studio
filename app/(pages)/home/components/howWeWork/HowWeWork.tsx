// React
import { FC } from "react";
// Animations
import { motion } from "framer-motion";
// Styles
import s from "./styles/HowWeWork.module.scss";
// Next
import Image from "next/image";

export const HowWeWork: FC = ({}) => {
  const DATA_LIST = [
    {
      title: "1. Заполнение брифа",
      text: "Наш менеджер свяжется с вами и предложит заполнить бриф на разработку сайта. Таким образом мы лучше поймем специфику вашего бизнеса.",
    },
    {
      title: "2. Прототипирование",
      text: "UX-специалисты готовят структуру главной страницы вашего будущего сайта. На этом этапе мы также добавляем текстовый контент.",
    },
    {
      title: "3. Демо-версия",
      text: "Дизайнер создает главную страницу сайта на основе прототипа. Мы отправляем готовую главную страницу вам на утверждение.",
    },
    {
      title: "4. Разработка сайта",
      text: "Когда главная страница утверждена, мы переходим к работе над структурой, дизайном и контентом внутренних страниц сайта.",
    },
    {
      title: "5. Запуск и передача владельцу",
      text: "Когда сайт готов и утвержден, мы передаем его на ваш аккаунт и открываем для индексации поисковыми системами.",
    },
  ];
  // Animation
  const animationImg = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  // Animation
  const animationText = {
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
    <section className={`${s.HowWeWork} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={animationImg}
            className={s.Image}
          >
            <Image
              src={"/HowWeWork/img.png"}
              width={1000}
              height={1000}
              alt=""
            />
          </motion.figure>
          <section className={s.Content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationText}
              viewport={{ amount: 0.2, once: true }}
              className={s.header}
            >
              <h3 className="text-green">Процесс создания сайта</h3>
              <h2 className="text-black dark:text-white">Как мы работаем</h2>
              <p className="text-gray">
                Наша цель — создать для вас действительно эффективный сайт. Для этого
                мы разделили процесс разработки на этапы:
              </p>
            </motion.div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: true }}
              className={s.List}
            >
              {DATA_LIST.map((item, i) => (
                <motion.li variants={animationText} custom={i} key={i}>
                  <h4 className="text-green">{item.title}</h4>
                  <p className="text-gray">{item.text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </section>
        </section>
      </div>
    </section>
  );
};
