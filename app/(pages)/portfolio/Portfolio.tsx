"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/Portfolio.module.scss";
// Animations
import { motion } from "framer-motion";
// Icons
import { ExternalLink, Calendar } from "lucide-react";
// Components
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";
import { BannerSendRequest } from "@/app/components/BannerSendRequest/BannerSendRequest";

export const PortfolioPage: FC = () => {
  const DATA_PROJECTS = [
    {
      title: "Корпоративный сайт для IT-компании",
      category: "Веб-разработка",
      description:
        "Современный корпоративный сайт с адаптивным дизайном, анимациями и интеграцией CRM-системы.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      date: "Январь 2024",
      image: "/portfolio/project1.jpg",
    },
    {
      title: "Интернет-магазин модной одежды",
      category: "E-commerce",
      description:
        "Полнофункциональный интернет-магазин с корзиной, системой оплаты и личным кабинетом пользователя.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      date: "Декабрь 2023",
      image: "/portfolio/project2.jpg",
    },
    {
      title: "Лендинг для стартапа",
      category: "Landing Page",
      description:
        "Привлекательный одностраничный сайт с формами заявок и интеграцией аналитики.",
      technologies: ["React", "SCSS", "EmailJS"],
      date: "Ноябрь 2023",
      image: "/portfolio/project3.jpg",
    },
    {
      title: "Портал для онлайн-обучения",
      category: "Веб-платформа",
      description:
        "Образовательная платформа с системой курсов, тестирования и отслеживания прогресса.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      date: "Октябрь 2023",
      image: "/portfolio/project4.jpg",
    },
    {
      title: "Сайт ресторана с онлайн-бронированием",
      category: "Веб-разработка",
      description:
        "Элегантный сайт ресторана с меню, галереей и системой онлайн-бронирования столиков.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      date: "Сентябрь 2023",
      image: "/portfolio/project5.jpg",
    },
    {
      title: "Корпоративный портал для логистической компании",
      category: "Веб-приложение",
      description:
        "Внутренний портал для управления заказами, отслеживания грузов и взаимодействия с клиентами.",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      date: "Август 2023",
      image: "/portfolio/project6.jpg",
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
        title="Портфолио"
        subtitle="Наши работы"
        description="Ознакомьтесь с нашими последними проектами и убедитесь в качестве нашей работы"
      />
      <section className={`${s.Portfolio} bg-white dark:bg-black`}>
        <div className="container">
          <section className={s.Wrapper}>
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={s.Header}
            >
              <motion.h3 variants={animation} custom={1} className="text-green">
                Наши проекты
              </motion.h3>
              <motion.h2
                variants={animation}
                custom={2}
                className="text-black dark:text-white"
              >
                Работы, которыми мы гордимся
              </motion.h2>
              <motion.p variants={animation} custom={3} className="text-gray">
                За время работы мы реализовали множество проектов различной сложности для клиентов из разных отраслей.
              </motion.p>
            </motion.section>

            <section className={s.Projects}>
              {DATA_PROJECTS.map((project, i) => (
                <motion.article
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2, once: true }}
                  variants={animation}
                  custom={i}
                  className={`${s.ProjectCard} bg-white dark:bg-black_secondary border-1 border-gray/10 rounded-lg`}
                >
                  <div className={s.ProjectImage}>
                    <div className={`${s.ImagePlaceholder} bg-gradient-to-br from-blue/20 to-green/20`}>
                      <div className="text-gray text-center">
                        <ExternalLink size={48} className="mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Пример проекта</p>
                      </div>
                    </div>
                  </div>
                  <div className={s.ProjectContent}>
                    <div className={s.ProjectHeader}>
                      <span className="text-green text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray text-sm">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <h3 className="text-black dark:text-white">{project.title}</h3>
                    <p className="text-gray">{project.description}</p>
                    <div className={s.Technologies}>
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray/10 text-gray text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>
          </section>
        </div>
      </section>
      <BannerSendRequest />
    </>
  );
};
