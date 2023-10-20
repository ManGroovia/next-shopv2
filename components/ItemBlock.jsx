import React from "react";
import Image from "next/image";
import favImg from "../public/assets/fav.svg";
import cart from "../public/assets/itemCart.svg";
import { ButtonAdd } from "./ButtonAdd";
export const ItemBlock = ({ src, title, price }) => {
  return (
  
    <div className="w-[230px] h-[400px] bg-white rounded-[10px] flex  flex-col justify-around hover:shadow-xl cursor-pointer">
      <div className="flex justify-end p-[10px]">
        <Image src={favImg} alt="img" />
      </div>
      <div className="flex justify-center">
        <Image src={src} alt="img" width={136} height={136}  />
      </div>
      <div className="flex justify-center items-center">
        <h4 className="text-[15px] font-sans font-medium text-center	">
          {title}
        </h4>
      </div>
      <div className="flex items-center justify-center font-bold">
        <p>{price.toLocaleString()}₸</p>
      </div>
      <div className="flex justify-around items-center mt-4">
        <ButtonAdd />
        <Image src={cart} alt="img" />
      </div>
    </div>
   
  );
};
