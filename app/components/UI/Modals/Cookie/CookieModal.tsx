"use client";
import { FC, useEffect, useState } from "react";
import s from "./CookieModal.module.scss";
import { X } from "lucide-react";

export const CookieModal: FC = ({}) => {
  const [isClose, setClose] = useState(true);
  useEffect(() => {
    const storedValue = window.sessionStorage.getItem("bannerCookie");
    if (storedValue !== null) {
      setClose(JSON.parse(storedValue));
    }
  }, []);
  useEffect(() => {
    sessionStorage.setItem("bannerCookie", JSON.stringify(isClose));
  }, [isClose]);
  return (
    <>
      {isClose && (
        <section
          className={`${s.CookieModal} left-0 bottom-0  bg-white/50 md:rounded-md dark:bg-black/50 fixed md:bottom-5 md:left-5 p-4 border-t-1 md:border-1 border-gray/20 backdrop-blur-md`}
        >
          <X
            onClick={() => setClose(false)}
            size={15}
            className="absolute top-[10px] right-[10px] text-black dark:text-white cursor-pointer z-[20]"
          />
          <section>
            <h4 className="text-[18px] font-semibold text-black dark:text-white">
              Текст про куки
            </h4>
            <p className="text-xs md:text-sm font-normal text-gray dark:text-gray leading-6">
              Текст про куки
            </p>
          </section>
        </section>
      )}
    </>
  );
};
