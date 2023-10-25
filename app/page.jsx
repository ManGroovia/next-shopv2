import Image from "next/image";
import { CategoryBlock } from "@/components/CategoryBlock";
import Link from "next/link";
import { Categories } from "@/components/Categories";
import Popular from "@/components/Popular";
import { HeroCarousel } from "@/components/HeroCarousel";

const brands = [
  {
    imgUrl: "assets/brands/acer.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/apple.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/asus.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/hp.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/msi.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/samsung.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/vivo.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/xiaomi.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/acer.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/apple.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/asus.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/brands/hp.svg",
    alt: "img",
  },
];

const partners = [
  {
    imgUrl: "assets/partners/image (1).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (2).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (3).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (4).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (1).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (2).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (3).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (4).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image (4).svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image.svg",
    alt: "img",
  },
];

const swiperImages = [
  {
    imgUrl: "assets/partners/image.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image.svg",
    alt: "img",
  },
  {
    imgUrl: "assets/partners/image.svg",
    alt: "img",
  },
];
export default function Home() {
  return (
    <>
      <section className=" flex mt-[100px] ">
        <h3 className="font-semibold	text-[18px] ">Категории</h3>
      </section>
      <section>
        <Categories />

        <h3 className="font-bold  text-[18px] mt-[50px]">Популярные товары</h3>
        <Popular></Popular>
      </section>
      <h3 className="font-bold  text-[18px] mt-[50px]">Бренды</h3>
      <section className="grid grid-cols-[repeat(6,_1fr)] grid-rows-[repeat(2,_1fr)] gap-x-[20px] gap-y-[20px]">
        {brands.map((brand) => (
          <div className="flex bg-white w-[188px] h-[100px] justify-center items-center ">
            <Image
              src={brand.imgUrl}
              alt={brand.alt}
              width={90}
              height={90}
              key={brand.id}
            ></Image>
          </div>
        ))}
      </section>
      <HeroCarousel />
      <h3 className="font-bold  text-[18px] mt-[50px]">Наши партнёры</h3>
      <section className="grid grid-cols-[repeat(6,_1fr)] grid-rows-[repeat(2,_1fr)] gap-x-[20px] gap-y-[20px]">
        {partners.map((partners) => (
          <div className="flex bg-white w-[188px] h-[100px] justify-center items-center ">
            <Image
              src={partners.imgUrl}
              alt={partners.alt}
              width={90}
              height={90}
              key={partners.id}
            ></Image>
          </div>
        ))}
      </section>
    </>
  );
}
