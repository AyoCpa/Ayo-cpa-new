import React from "react";
import Image from "next/image";
import warning from "@/public/ASSETS/ICONS/warning.svg";
import { inter } from "@/utils/fonts";



function Warning() {
  return (
    <>
      <div className="absolute  border  top-0 flex item-align py-4 w-full right-0 left-0 justify-center bg-[#FDF7E2]">
        <div>
          <Image src={warning} alt="" />
        </div>
        <p className={`text-[#D2A812] ${inter.variable} font-inter ml-4 font-light `}>
          New password set will be for both Website and Client Portal access
        </p>
      </div>
    </>
  );
}

export default Warning;
