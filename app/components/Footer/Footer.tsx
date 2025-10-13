"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/Footer.module.scss";
// Next
import Link from "next/link";
// Components
import { Logo } from "@/app/components/UI/Logo/Logo";
import { FooterForm } from "./form";

export const Footer: FC = ({}) => {
  const getFullYear = new Date().getFullYear();
  const DATA_ACTIONS = [
    {
      title: "О нас",
      links: [
        {
          value: "WebMelenium Studio",
          href: "/",
        },
      ],
    },
    {
      title: "Юридическая информация",
      links: [
        {
          value: "Политика конфиденциальности",
          href: "/privacy-policy",
        },
        {
          value: "Настройки Cookie",
          href: "/cookie-settings",
        },
      ],
    },
  ];
  return (
    <footer
      className={`${s.Footer} bg-white dark:bg-black border-t-1 border-gray/10`}
    >
      <div className="container ">
        <section className={`${s.Wrapper}`}>
          <section className={s.Content}>
            <Link className={s.Logo} href={"/"}>
              <Logo />
              <span translate="no">WebMelenium Studio</span>
            </Link>
            <ul className={s.Actions}>
              {DATA_ACTIONS.map((item, i) => (
                <li key={i}>
                  <h5 className="text-black dark:text-white">{item.title}</h5>
                  <div>
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        className="text-gray hover:text-green"
                        href={link.href}
                      >
                        {link.value}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className={s.Subscribe}>
              <h5>Подпишитесь на нашу рассылку</h5>
              <p className="text-gray">
                Будьте в курсе новых возможностей, релизов и полезных материалов.
              </p>
              {/* Form */}
              <FooterForm />
            </div>
          </section>
        </section>
      </div>
      <section className={`${s.Copyright} bg-gray/5 border-t-1 border-gray/10`}>
        <div className="text-gray">
          © {getFullYear} ИП Меленчук Алексей Артемович, ИНН 784303134201
        </div>
      </section>
    </footer>
  );
};
