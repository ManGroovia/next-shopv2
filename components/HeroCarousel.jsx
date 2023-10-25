"use client";

import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const heroImages = [
  {
    imgUrl: "assets/baner0.svg",
    alt: "swiper",
  },
  {
    imgUrl: "assets/baner1.svg",
    alt: "swiper",
  },
  {
    imgUrl: "assets/baner2.svg",
    alt: "swiper",
  },
];
export const HeroCarousel = () => {
  return (
    <div className="mt-4">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        
        showStatus={false}
        
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className=" h-[300px] mt-4 rounded-[10px]  "
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};
