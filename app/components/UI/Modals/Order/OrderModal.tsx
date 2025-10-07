"use client";
// React
import { FC, useContext } from "react";
// Next
import Link from "next/link";
// Context
import { useModalContext } from "@/providers/ModalProvider";
// Components
import { Form } from "./Form";
// NextUI
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export const OrderModal: FC = ({}) => {
  const { isOpen, onOpenChange } = useContext(useModalContext);
  return (
    <>
      <Modal
        className="bg-white dark:bg-black"
        placement="center"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className={`p-8`}>
          <ModalHeader className="grid text-center p-0 mb-5">
            <h2 className="text-black dark:text-white text-3xl sm:text-4xl mb-2 ">
              Нужен сайт?
            </h2>
            <p className="text-gray text-sm font-normal">
              Заполните форму, и мы свяжемся с вами по электронной почте в
              ближайшее время, чтобы помочь выбрать лучший тарифный план,
              обсудить детали и начать разработку вашего сайта.
            </p>
          </ModalHeader>
          <ModalBody className="p-0">
            <Form />
          </ModalBody>
          <ModalFooter className="grid justify-center p-0 text-xs font-normal mt-2">
            <p className="text-gray">
              Нажимая кнопку, вы соглашаетесь на
              <Link className="ml-1 text-blue dark:text-green " href={"/"}>
                обработку персональных данных.
              </Link>
            </p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
