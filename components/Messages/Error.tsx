import React from "react";
import markX from "@/public/ASSETS/ICONS/mark-auth.svg";
import Image from "next/image";
import { inter } from "@/utils/fonts";

type ErrorProps = {
  message: string;
  handleClose: Function;
};
function Error({ message, handleClose }: ErrorProps) {
    // TODO:Do Not forget to add a margin top to the elements below this
  return (
    <>
      <div onClick={() => handleClose(false)} className="absolute  border  top-0 flex item-align py-4 w-full right-0 left-0 justify-center bg-[#FFD6D9]">
        <div className="cursor-pointer">
          <Image src={markX} alt="" />
        </div>
        <p
          className={`text-[#932C2F] ${inter.variable} font-inter lg:text-base text-sm ml-4 font-light `}
        >
          {message}
        </p>
      </div>
    </>
  );
}

export default Error;
