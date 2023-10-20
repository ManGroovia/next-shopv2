'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
export const Search = () => {
  const [value, setValue] = useState('')
  return (
    <div className='flex items-center'>
        <input className='w-[396px] h-[46px] border-[1px] border-primary-border rounded-l-lg p-[8px] outline-none'  placeholder="Введите название товара" type="text" />
        {value && (
          <svg
            onClick={onClickClear}
            className="clearIcon"
            viewBox="0 0 20 19.84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
          </svg>
        )}
        <Image alt="log" width={60} height={46} src='/assets/qidirish.svg' />
    </div>
  )
}
