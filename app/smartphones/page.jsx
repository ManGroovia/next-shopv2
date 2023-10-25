"use client";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchSmartphonesData,
  increaseVisibleCount,
} from "@/redux/slices/smartphoneSlice";
import { ItemBlock } from "@/components/ItemBlock";
export default function Page() {
  const dispatch = useDispatch();
  const { data, visibleCount } = useSelector((state) => state.smartphones);

  useEffect(() => {
    dispatch(fetchSmartphonesData());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(increaseVisibleCount());
  };
  return <section className="flex flex-row justify-between mt-4 w-full border border-black">
    <div className="border border-black w-[210] h-[450]">тут будут фильтры...</div>
    <div className="flex gap-[55px] justify-around flex-wrap w-[80%]">
    {data.slice(0, visibleCount).map((items) => (
          <ItemBlock
            src={items.imageSrc}
            title={items.title}
            price={items.price}
            key={items.id}
          />
        ))}
    </div>
  </section>;
}
