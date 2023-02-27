import React from "react";
import markX from "@/public/ASSETS/ICONS/mark-auth.svg";
import Image from "next/image";
import { inter } from "@/utils/fonts";

type ErrorProps = {
  message: string;
};
function Error({ message }: ErrorProps) {
    // TODO:Do Not forget to add a margin top to the elements below this
  return (
    <>
      <div className="absolute  border  top-0 flex item-align py-4 w-full right-0 left-0 justify-center bg-[#FDF7E2]">
        <div>
          <Image src={markX} alt="" />
        </div>
        <p
          className={`text-[#FFD6D9] ${inter.variable} font-inter ml-4 font-light `}
        >
          {message}
        </p>
      </div>
    </>
  );
}

export default Error;
