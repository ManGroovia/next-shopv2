import React from "react";
import Image from "next/image";
import { Search } from "./Search";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="flex items-center mt-1 justify-between  max-w-10xl mx-auto  ">
      <Link href="/">
        <Image
          className="cursor-pointer"
          width={91}
          height={35}
          src="/assets/Logo.svg"
          alt="logo"
        />
      </Link>
      <div className="flex items-center cursor-pointer bg-gradient-to-l from-blue-600 to-red-600 w-[149px] h-[46px] justify-center gap-2 rounded-[8px]  text-white">
        <Image alt="vector" width={24} height={24} src="/assets/Vector.svg" />
        <h3>Каталог</h3>
      </div>
      <Search />
      <Link href="/favorites">
        <Image
          className="cursor-pointer"
          src="assets/Sevimlilar.svg"
          width={46}
          height={46}
          alt="fav"
        />
      </Link>
      <Link href="/cart">
        <Image
          className="cursor-pointer"
          src="assets/Korzina.svg"
          width={46}
          height={46}
          alt="cart"
        />
      </Link>
      <button className="flex items-center justify-center w-[105px] h-[45px]  rounded-[10px] bg-gradient-to-r from-[rgba(77,94,246,0.2)] to-[rgba(246,77,77,0.2)]">
        Войти
      </button>
    </header>
  );
};
