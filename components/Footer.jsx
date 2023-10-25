import Image from "next/image";
import React from "react";

const icons = [
  {
    imgUrl: "assets/contact-icons/facebook.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/contact-icons/Group.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/contact-icons/tg.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/contact-icons/tik.svg",
    alt: "img",
  },
];
export const Footer = () => {
  return (
    <section className="w-full  mt-4 h-[400px] bg-[linear-gradient(_270deg,_rgba(77,_94,_246,_0.2)_0%,_rgba(246,_77,_77,_0.2)_100%_)] flex justify-around flex-col">
      <div className="flex  w-full justify-around">
        <div className="flex justify-between mt-4 w-1/2">
          <div className="flex h-[70%] flex-col items-center">
            <h3 className="font-bold">Полезно</h3>
            <ul className="flex flex-col items-center justify-between h-full text-[15px] mt-2">
              <li>Условия возврата и гарантия</li>
              <li>Доставка и оплата</li>
              <li>Отзывы и предложения</li>
              <li>Условия кредитования</li>
            </ul>
          </div>
          <div className="flex justify-center h-[70%] flex-col items-center">
            <h3 className="font-bold">Компания NextStore</h3>
            <ul className="flex flex-col items-center justify-between h-full text-[15px] mt-2">
              <li>Контакты</li>
              <li>О компании</li>
              <li>Сотрудничество</li>
              <li>Промокоды</li>
              <li>Реклама</li>
            </ul>
          </div>
          <div className="flex justify-center h-[70%] flex-col items-center">
            <h3 className="font-bold">Интернет магазин</h3>
            <ul className="flex flex-col items-center justify-between h-full text-[15px] mt-2">
              <li>Акции</li>
              <li>Новости</li>
              <li>Сборка игровых компьютеров</li>
              <li>Магазины</li>
              <li>График работы</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 items-center flex flex-col">
          <h3 className="font-bold text-center	">Информационная служба</h3>
          <ul className="flex flex-col items-center justify-around h-[200px] text-[15px]">
            <li>contact.@nextstore.kz</li>
            <li>+998 97 712 96 96</li>
            <li>+998 95 503 09 09</li>
            <li>Ташкенская 130, Алматы, Казахстан</li>
          </ul>
          <div className="flex justify-around w-full">
            {icons.map((icon, i) => (
              <Image
                src={icon.imgUrl}
                alt={icon.alt}
                width={42}
                height={42}
                key={i}
              ></Image>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-[80%] m-auto flex flex-col">
        <span className="h-[1px] w-full bg-gradient-to-l from-blue-600 to-red-600 rounded-[1px]"></span>
        <div className="flex w-full justify-between mt-2">
          <p>2023 NextStore.kz</p>
          <p>Powered by ManGroovia</p>
        </div>
      </div>
    </section>
  );
};
