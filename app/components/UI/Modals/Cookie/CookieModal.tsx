"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import s from "./CookieModal.module.scss";
// NextUI
import { Button } from "@nextui-org/react";
import { X, Cookie } from "lucide-react";

export const CookieModal: FC = ({}) => {
  const [isClose, setClose] = useState(true);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem("cookieConsent");
    if (storedValue !== null) {
      setClose(false);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setClose(false);
  };

  const handleAcceptNecessary = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setClose(false);
  };

  const handleClose = () => {
    // Если пользователь закрывает без выбора, сохраняем только необходимые
    handleAcceptNecessary();
  };

  return (
    <>
      {isClose && (
        <section
          className={`${s.CookieModal} right-0 bottom-0 bg-white/95 md:rounded-md dark:bg-black/95 fixed md:bottom-5 md:right-5 p-5 border-t-1 md:border-1 border-gray/20 backdrop-blur-md shadow-lg`}
        >
          <X
            onClick={handleClose}
            size={18}
            className="absolute top-[12px] right-[12px] text-gray hover:text-black dark:hover:text-white cursor-pointer z-[20] transition-colors"
          />
          
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue/10 to-green/10">
              <Cookie className="text-blue dark:text-green" size={24} />
            </div>
            <div>
              <h4 className="text-[18px] font-semibold text-black dark:text-white mb-1">
                Мы используем cookies
              </h4>
            </div>
          </div>

          <p className="text-sm font-normal text-gray dark:text-gray leading-6 mb-4">
            Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента. 
            Продолжая использовать сайт, вы соглашаетесь с использованием cookies в соответствии с нашей{" "}
            <Link href="/privacy-policy" className="text-blue dark:text-green hover:underline">
              Политикой конфиденциальности
            </Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={handleAcceptAll}
              className="bg-gradient-to-br from-blue to-green text-white font-medium shadow-md"
              radius="sm"
              size="md"
            >
              Принять все
            </Button>
            <Button
              onClick={handleAcceptNecessary}
              className="bg-gray/10 text-black dark:text-white font-medium hover:bg-gray/20"
              radius="sm"
              size="md"
              variant="flat"
            >
              Только необходимые
            </Button>
            <Link href="/cookie-settings" className="flex items-center justify-center">
              <Button
                className="text-gray hover:text-black dark:hover:text-white font-medium"
                radius="sm"
                size="md"
                variant="light"
              >
                Настроить
              </Button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};
