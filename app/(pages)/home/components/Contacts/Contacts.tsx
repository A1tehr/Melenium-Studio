// React
import { FC } from "react";
// Styles
import s from "./styles/Contacts.module.scss";
// Animations
import { motion } from "framer-motion";
// Components
import { ContactForm } from "./form";

export const Contacts: FC = ({}) => {
  // Animation
  const animation = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <section className={`${s.Contacts} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Content}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={animation}
            className={s.Info}
          >
            <h3 className="text-green">Нужен сайт?</h3>
            <h2 className="text-black dark:text-white">
              Хотите заказать новый сайт?
            </h2>
            <p className="text-gray">
              Заполните форму, и мы свяжемся с вами в ближайшее время, чтобы
              помочь выбрать лучший тарифный план и обсудить все нюансы.
            </p>
            <p className="text-gray">
              Мы учтем все ваши пожелания к структуре, дизайну и контенту и
              разработаем современный, эффективный и красивый сайт для вашего
              бизнеса.
            </p>
          </motion.section>
          <ContactForm />
        </section>
      </div>
    </section>
  );
};
