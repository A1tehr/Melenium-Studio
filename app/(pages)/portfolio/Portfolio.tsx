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

import Image from 'next/image'

import project1Image from '../../assets/images/portfolio/project1.png';

export const PortfolioPage: FC = () => {
  const DATA_PROJECTS = [
    {
      title: "Психологический центр развидия",
      category: "Веб-разработка",
      description:
        "Современный коммерческий сайт с адаптивным дизайном, СЕО оптимизаций, анимациями и административной панелью",
      technologies: ["React", "Python", "Tailwind CSS", "PostgreSQL"],
      date: "Октябрь 2025",
      image: project1Image,
      url: "https://vita-psy.com/"
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
        supTitle="Наши работы"
        text="Ознакомьтесь с нашими последними проектами и убедитесь в качестве нашей работы"
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
                Некоторые работы, которыми мы гордимся
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
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full w-full"
                    >
                      {project.image ? (
                          <div className={s.ImagePlaceholder}>
                            <Image
                                src={project.image}
                                alt="Пример проекта"
                                fill
                                className="object-cover"
                            />
                          </div>
                      ) : (
                          <div className={`${s.ImagePlaceholder} bg-gradient-to-br from-blue/20 to-green/20`}>
                            <div className="text-gray text-center">
                              <ExternalLink size={48} className="mx-auto mb-2 opacity-30" />
                              <p className="text-sm">Пример проекта</p>
                            </div>
                          </div>
                      )}
                    </a>
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
