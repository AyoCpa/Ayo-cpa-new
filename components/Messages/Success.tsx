import React from 'react'
import tick from "@/public/ASSETS/ICONS/tick.svg"
import Image from "next/image"
import {inter , ubuntu} from "@/utils/fonts"

interface SuccessProps{
    header_1:string,
    header_2: string,
    message: string
}

export const Success = ({header_1 , header_2 , message}: SuccessProps) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="lg:w-[600px] w-[80%] flex flex-col justify-center h-[500px] bg-[#EFEFEF]">
        <div className="justify-center flex">
          <Image src={tick} alt="" />
        </div>

        <div
          className={`${inter.variable} text-center  text-[#1E1E1E] font-inter text-base lg:text-lg`}
        >
          <p className="font-semibold my-1 ">{header_1}</p>
          <p className="font-semibold mb-1 w-4/5 lg:w-full mx-auto" >{header_2}</p>
          <p className="text-[#6E6E6E] text-xs lg:text-base w-4/5 lg:w-[90%] mx-auto">{message}</p>
        </div>
      </div>
    </div>
  );
}
