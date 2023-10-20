import Image from "next/image";
import { CategoryBlock } from "@/components/CategoryBlock";
import Link from "next/link";
import { Categories } from "@/components/Categories";
import Popular from "@/components/Popular";
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
      
    </>
  );
}
