"use client";
import { FC } from "react";
import s from "./styles/Table.module.scss";

// Icons
import { Check, X } from "lucide-react";
// NextUi
import {
  Table as UITable,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export const Table: FC = ({}) => {
  const DATA_TABLE_HEADER = [
    {
      title: "",
      price: "",
    },
    {
      title: "W-Start",
      price: "28 500₽",
    },
    {
      title: "W-Base",
      price: "47 500₽",
    },
    {
      title: "W-Growth",
      price: "66 500₽",
    },
    {
      title: "W-Ultimate",
      price: "104 500₽",
    },
    {
      title: "E-commerce",
      price: "80 750₽",
    },
  ];
  const DATA_TABLE_BODY = [
    {
      row: [
        {
          title: "Тип дизайна",
        },
        {
          info: "Базовый дизайн. Этот вариант для тех, у кого нет времени на разработку сайта.",
        },
        {
          info: "Простой дизайн с подбором цветовой палитры, шрифтов и фонов для вашего сайта",
        },
        {
          info: "Продвинутый дизайн, включающий подбор цветовой палитры, шрифтов и фонов, а также использование градиентов",
        },
        {
          info: "Эксклюзивный дизайн, включающий создание уникальных иконок, изображений и фонов",
        },
        {
          info: "Простой дизайн с возможностью использования градиентов на фонах при необходимости",
        },
      ],
    },
    {
      row: [
        {
          title: "Количество страниц",
        },
        {
          info: "3",
        },
        {
          info: "4",
        },
        {
          info: "5",
        },
        {
          info: "7",
        },
        {
          info: "5+",
        },
      ],
    },
    {
      row: [
        {
          title: "Прототипирование (все страницы)",
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "Программное обеспечение для разработки дизайна",
        },
        {
          info: "WebMelenium",
        },
        {
          info: "WebMelenium",
        },
        {
          info: "WebMelenium",
        },
        {
          info: "WebMelenium",
        },
        {
          info: "WebMelenium",
        },
      ],
    },
    {
      row: [
        {
          title: "Мобильная версия",
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "Создание логотипа",
        },
        {
          info: "Текстовый логотип (векторный формат не включен)",
        },
        {
          info: "Текстовый логотип (векторный формат не включен)",
        },
        {
          info: "Текстовый логотип в векторном формате",
        },
        {
          info: "Текстовый логотип в векторном формате",
        },
        {
          info: "Текстовый логотип в векторном формате",
        },
      ],
    },
    {
      row: [
        {
          title: "Изображения",
        },
        {
          info: "Стоковые изображения",
        },
        {
          info: "Стоковые изображения",
        },
        {
          info: "Отредактированные стоковые изображения",
        },
        {
          info: "Отредактированные стоковые изображения",
        },
        {
          info: "Отредактированные стоковые изображения",
        },
      ],
    },
    {
      row: [
        {
          title: "Иконки",
        },
        {
          info: "Иконки из базы WebMelenium",
        },
        {
          info: "Стоковые иконки",
        },
        {
          info: "Стоковые иконки",
        },
        {
          info: "Эксклюзивные иконки, созданные нашим дизайнером",
        },
        {
          info: "Стоковые иконки",
        },
      ],
    },
    {
      row: [
        {
          title: "Редактирование фотографий под стиль сайта",
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "Анимации",
        },
        {
          info: "Анимации, доступные в редакторе",
        },
        {
          info: "Анимации, доступные в редакторе + анимации с использованием CSS",
        },
        {
          info: "Создание анимаций с использованием CSS",
        },
        {
          info: "Создание анимаций с использованием CSS и JS",
        },
        {
          info: "Создание анимаций с использованием CSS",
        },
      ],
    },
    {
      row: [
        {
          title: "Создание всплывающих окон",
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "Редактирование фонов",
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: "Добавление различных оттенков",
        },
        {
          info: "Добавление различных оттенков и градиентов",
        },
        {
          info: "Добавление градиентов, изображений и сложных геометрических форм",
        },
        {
          info: "Добавление градиентов и сложных геометрических форм",
        },
      ],
    },
    {
      row: [
        {
          title: "Количество правок включено",
        },
        {
          info: "2",
        },
        {
          info: "2",
        },
        {
          info: "2",
        },
        {
          info: "3",
        },
        {
          info: "3",
        },
      ],
    },
    {
      row: [
        {
          title: "Скидка на наполнение сайта контентом",
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: "10%",
        },
        {
          info: "15%",
        },
        {
          info: "20%",
        },
        {
          info: "15%",
        },
      ],
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
    <section className={`${s.TableWrapper} bg-white dark:bg-black `}>
      <UITable
        classNames={{
          wrapper: "p-3",
        }}
        shadow="md"
        isStriped
        aria-label="Prices table"
      >
        <TableHeader>
          {DATA_TABLE_HEADER.map((data, i) => (
            <TableColumn
              key={i}
              className=" text-center bg-black dark:bg-black_secondary text-white py-1 "
            >
              <h5 className=" text-lg lg:text-xl font-medium ">{data.title}</h5>
              <p className="text-green text-sm font-normal">{data.price}</p>
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {DATA_TABLE_BODY.map((data, i) => (
            <TableRow key={i}>
              {data.row.map((cell, i) => (
                <TableCell
                  key={i}
                  className="border-r-1 border-gray/10 py-6 last:border-none"
                >
                  <h5 className="text-sm lg:text-base font-semibold text-black dark:text-white ">
                    {cell.title}
                  </h5>
                  <p className="text-center font-normal  text-gray text-xs lg:text-sm grid place-items-center">
                    {cell.info}
                  </p>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </UITable>
    </section>
  );
};
