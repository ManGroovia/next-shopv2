"use client";
import React from "react";
import Link from "next/link";
import { CategoryBlock } from "./CategoryBlock";
import { useState } from "react";
const categoryImgs = [
  {
    src: "assets/kategory/phone.svg",
    title: "Смартфоны",
    alt: "img",
    category: "smartphones",
  },
  {
    src: "assets/kategory/laptop.svg",
    title: "Компьютеры и коплектующие",
    alt: "img",
    category: "pc",
  },
  {
    src: "assets/kategory/tv.svg",
    title: "Телевизоры",
    alt: "img",
    category: "tv",
  },
  {
    src: "assets/kategory/watch.svg",
    title: "Умные часы",
    alt: "img",
    category: "watch",
  },
  {
    src: "assets/kategory/airpods.svg",
    title: "Акссессуары",
    alt: "img",
    category: "accesours",
  },
  {
    src: "assets/kategory/conder.svg",
    title: "Кондиционеры",
    alt: "img",
    category: "conders",
  },
  {
    src: "assets/kategory/freez.svg",
    title: "Холодильники",
    alt: "img",
    category: "freez",
  },
  {
    src: "assets/kategory/wash.svg",
    title: "Стиральные машины",
    alt: "img",
    category: "washes",
  },
  {
    src: "assets/kategory/coffe.svg",
    title: "Кофемашины",
    alt: "img",
    category: "coffe",
  },
  {
    src: "assets/kategory/air.svg",
    title: "Увлажнители воздуха",
    alt: "img",
    category: "airFresh",
  },
  {
    src: "assets/kategory/gaz.svg",
    title: "Газовые и электро плиты",
    alt: "img",
    category: "gaz",
  },
  {
    src: "assets/kategory/micro.svg",
    title: "Микроволновые печи",
    alt: "img",
    category: "micro",
  },
  {
    src: "assets/kategory/multi.svg",
    title: "Мультиварки",
    alt: "img",
    category: "multi",
  },
  {
    src: "assets/kategory/robot.svg",
    title: "Роботы пылесосы",
    alt: "img",
    category: "robot",
  },
  {
    src: "assets/kategory/washM.svg",
    title: "Посудомоечные машины",
    alt: "img",
    category: "washesM",
  },
  {
    src: "assets/kategory/photo.svg",
    title: "Фото техника",
    alt: "img",
    category: "photo",
  },
];

export const Categories = () => {
  const [visibleCategories, setVisibleCategories] = useState(8);
  return (
    <>
      <div className="flex mt-2 items-center justify-between flex-wrap gap-[25px]">
        {categoryImgs.slice(0, visibleCategories).map((category) => (
          <Link href={`/${category.category}`} key={category.title}>
            <CategoryBlock src={category.src} title={category.title} />
          </Link>
        ))}
      </div>
      <div className="mt-5 w-full flex items-center justify-center">
        {visibleCategories < categoryImgs.length && (
          <button
            className="bg-white text-center w-full h-[50px] rounded-[10px]"
            onClick={() => setVisibleCategories(visibleCategories + 8)}
          >
            Показать больше
          </button>
        )}
      </div>
    </>
  );
};
