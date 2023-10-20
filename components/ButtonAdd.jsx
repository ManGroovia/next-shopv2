"use client";
import React from "react";

export const ButtonAdd = () => {
  const [added, setAdded] = React.useState(false);
  const onClickAdded = () => {
    
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 300);
  };
  return (
    <button
      onClick={onClickAdded}
      className={`flex items-center justify-center w-[130px] h-[40px] rounded-[8px] hover:bg-primary-green transition-all text-white bg-primary-blue text-[15px] ${
        added ? 'animate-btnClicked' : ''
      }`}
    >
      + Добавить
    </button>
  );
};
