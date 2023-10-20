"use client";
import React, { useEffect } from "react";
import { ItemBlock } from "./ItemBlock";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularData, increaseVisibleCount } from "@/redux/slices/popularSlice";

export default function Popular() {
  const dispatch = useDispatch();
  const { data, visibleCount } = useSelector((state) => state.popular);
  

  useEffect(() => {
    dispatch(fetchPopularData());
  }, [dispatch]);

  const loadMore = ()=> {
    dispatch(increaseVisibleCount())
  }

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between mt-5">
        {data.slice(0, visibleCount).map((items) => (
          <ItemBlock
            src={items.imageSrc}
            title={items.title}
            price={items.price}
            key={items.id}
          />
        ))}
      </div>
      <button onClick={loadMore}  className="bg-white text-center w-full h-[50px] rounded-[10px] mt-5">
        Показать больше
      </button>
    </>
  );
}
