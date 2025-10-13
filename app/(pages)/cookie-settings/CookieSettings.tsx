"use client";
// React
import { FC, useState, useEffect } from "react";
// Styles
import s from "./styles/CookieSettings.module.scss";
// Animations
import { motion } from "framer-motion";
// Components
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Cookie, Shield, BarChart3, Target } from "lucide-react";
import { useRouter } from "next/navigation";

export const CookieSettingsPage: FC = () => {
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");
    if (stored) {
      const parsed = JSON.parse(stored);
      setPreferences({
        necessary: true, // Всегда true
        analytics: parsed.analytics || false,
        marketing: parsed.marketing || false,
      });
    }
  }, []);

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consentData));
    router.push("/");
  };

  const handleAcceptAll = () => {
    const allEnabled = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allEnabled));
    router.push("/");
  };

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
        title="Настройки файлов cookie"
        subtitle="Управление cookies"
        description="Управляйте своими предпочтениями относительно использования файлов cookie на нашем сайте"
      />
      <section className={`${s.CookieSettings} bg-white dark:bg-black`}>
        <div className="container">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            className={s.Wrapper}
          >
            <motion.div variants={animation} custom={1} className={s.Intro}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue/10 to-green/10">
                  <Cookie className="text-blue dark:text-green" size={32} />
                </div>
                <div>
                  <h2 className="text-black dark:text-white text-2xl font-semibold">
                    О файлах cookie
                  </h2>
                </div>
              </div>
              <p className="text-gray leading-7">
                Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайтов. 
                Мы используем их для улучшения функциональности сайта, анализа посещаемости и персонализации контента.
              </p>
            </motion.div>

            <motion.div variants={animation} custom={2} className={s.CookieType}>
              <div className={s.TypeHeader}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green/10">
                    <Shield className="text-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-black dark:text-white font-semibold text-lg">
                      Необходимые cookies
                    </h3>
                    <p className="text-sm text-gray">Всегда активны</p>
                  </div>
                </div>
                <Switch
                  isSelected={true}
                  isDisabled
                  color="success"
                  size="lg"
                />
              </div>
              <p className="text-gray text-sm leading-6 mt-3">
                Эти файлы cookie необходимы для работы веб-сайта и не могут быть отключены. 
                Они обычно устанавливаются только в ответ на ваши действия, такие как установка параметров конфиденциальности, 
                вход в систему или заполнение форм.
              </p>
            </motion.div>

            <motion.div variants={animation} custom={3} className={s.CookieType}>
              <div className={s.TypeHeader}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue/10">
                    <BarChart3 className="text-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-black dark:text-white font-semibold text-lg">
                      Аналитические cookies
                    </h3>
                    <p className="text-sm text-gray">Помогают улучшить сайт</p>
                  </div>
                </div>
                <Switch
                  isSelected={preferences.analytics}
                  onValueChange={(value) =>
                    setPreferences({ ...preferences, analytics: value })
                  }
                  color="primary"
                  size="lg"
                />
              </div>
              <p className="text-gray text-sm leading-6 mt-3">
                Эти файлы cookie позволяют нам подсчитывать количество посещений и источники трафика, 
                чтобы мы могли измерять и улучшать производительность нашего сайта. Они помогают нам узнать, 
                какие страницы наиболее и наименее популярны, и увидеть, как посетители перемещаются по сайту.
              </p>
            </motion.div>

            <motion.div variants={animation} custom={4} className={s.CookieType}>
              <div className={s.TypeHeader}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Target className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-black dark:text-white font-semibold text-lg">
                      Маркетинговые cookies
                    </h3>
                    <p className="text-sm text-gray">Персонализация рекламы</p>
                  </div>
                </div>
                <Switch
                  isSelected={preferences.marketing}
                  onValueChange={(value) =>
                    setPreferences({ ...preferences, marketing: value })
                  }
                  color="secondary"
                  size="lg"
                />
              </div>
              <p className="text-gray text-sm leading-6 mt-3">
                Эти файлы cookie могут быть установлены через наш сайт нашими рекламными партнерами. 
                Они могут использоваться этими компаниями для создания профиля ваших интересов и показа 
                вам релевантной рекламы на других сайтах.
              </p>
            </motion.div>

            <motion.div
              variants={animation}
              custom={5}
              className={s.Actions}
            >
              <Button
                onClick={handleSavePreferences}
                className="bg-gradient-to-br from-blue to-green text-white font-medium shadow-md"
                radius="sm"
                size="lg"
              >
                Сохранить настройки
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-gray/10 text-black dark:text-white font-medium hover:bg-gray/20"
                radius="sm"
                size="lg"
                variant="flat"
              >
                Принять все
              </Button>
            </motion.div>
          </motion.section>
        </div>
      </section>
    </>
  );
};
