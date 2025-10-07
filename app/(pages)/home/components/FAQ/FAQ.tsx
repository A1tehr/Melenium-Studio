// Animations
import { motion } from "framer-motion";
// React
import { FC } from "react";
// Styles
import s from "./styles/FAQ.module.scss";
// NextUI
import { Accordion, AccordionItem } from "@nextui-org/react";
// Next
import Image from "next/image";

export const FAQ: FC = ({}) => {
  const itemClasses = {
    base: "p-0",
    title:
      "text-black dark:text-white font-semibold text-sm md:font-medium  md:text-md",
    content: "text-gray text-sm md:text-md",
  };
  const DATA_ACCORDION = [
    {
      title: "Есть ли дополнительные платежи?",
      text: "Цена, указанная на сайте, включает только стоимость разработки сайта. Дополнительно вам нужно будет оплатить хостинг и домен сайта.",
    },
    {
      title: "Будет ли эффективным SEO-продвижение готового сайта?",
      text: "Конечно. Сайты создаются с учетом всех требований SEO. У вас не возникнет трудностей с продвижением сайта в поисковых системах.",
    },
    {
      title: "Как можно ускорить процесс создания сайта?",
      text: "Минимальный срок создания лендинга — 10 дней. Если вам нужен готовый сайт быстрее, просим заранее подготовить все материалы и информацию, которые будут использоваться на сайте, а также оперативно отвечать нашим менеджерам.",
    },
    {
      title:
        "Вы прислали мне демо главной страницы, но мне оно не нравится, что делать?",
      text: "Если вас не устраивает дизайн главной страницы, мы учтем ваши комментарии, подберем новые референсы, и наш дизайнер сделает другую версию главной страницы на основе новой информации.",
    },
    {
      title:
        "Можно ли отказаться от ваших услуг и получить возврат средств за сайт?",
      text: "Если вас не устраивает качество услуг WebMelenium Studio, вы можете запросить полный возврат средств до утверждения дизайна главной страницы. Если сайт утвержден и передан вам, проект считается закрытым, и средства, потраченные на его разработку, не возвращаются.",
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
    <section className={`${s.FAQ} bg-white dark:bg-black   `}>
      <div className="container">
        <section className={s.Wrapper}>
          <section className={s.Content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={s.Header}
            >
              <motion.h3
                variants={animation}
                custom={1}
                className="text-green "
              >
                Дополнительная информация
              </motion.h3>
              <motion.h2
                variants={animation}
                custom={2}
                className="text-black dark:text-white"
              >
                Часто задаваемые вопросы
              </motion.h2>
              <motion.p variants={animation} custom={3} className="text-gray">
                Если у вас остались другие вопросы о разработке сайта, наши
                менеджеры с радостью проконсультируют вас лично.
              </motion.p>
            </motion.div>
            <Accordion
              fullWidth
              className={`${s.Accordion} mt-10 px-0 `}
              itemClasses={itemClasses}
            >
              {DATA_ACCORDION.map((item, i) => (
                <AccordionItem
                  classNames={{
                    base: "shadow px-3 bg-white dark:bg-black_secondary ",
                  }}
                  className={`${s.AccordionItem} `}
                  key={i}
                  title={item.title}
                >
                  {item.text}
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <figure className={s.Image}>
            <Image src={"/FAQ/img.png"} width={1000} height={1000} alt="" />
          </figure>
        </section>
      </div>
    </section>
  );
};
