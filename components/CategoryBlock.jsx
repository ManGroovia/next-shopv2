import React from "react";
import Image from "next/image";
export const CategoryBlock = ({ src, title }) => {
  return (
    <div className="flex flex-col w-[150px] h-[200px] bg-white text-center justify-center rounded-[10px] items-center cursor-pointer">
      <Image src={src} alt="img" width={136} height={136} />
      <p className="text-[16px]">{title}</p>
    </div>
  );
};
