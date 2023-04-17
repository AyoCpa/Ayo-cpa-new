import React from "react";
import x_ from "@/public/ASSETS/ICONS/mobileXButton.svg"
import Image from "next/image"
import { useDispatch } from "react-redux";
import { inter } from "@/utils/fonts";
import { closeMobileNav } from "@/redux/reducers/mobileNavReducer";

export const MobileNav = () => {
  const dispatch = useDispatch()
  return (
    <div className="lg:hidden fixed top-0 w-full bg-[#1A1229] z-20 min-h-screen">
      <div className="flex justify-end px-8 py-10 flex-col items-end">
        <div className="py-2 cursor-pointer" onClick={() => {
          dispatch(closeMobileNav())
        }}>
          <Image src={x_} alt="" />
        </div>
        <div>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>About</p>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>Services</p>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>Resources</p>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>File My Taxes</p>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>More Actions</p>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>Ayo234</p>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>Contact us</p>
          <p className={`${inter.variable} text-right mt-3 font-inter text-[#EFEFEF] font-semibold`}>Contact us</p>
        </div>
      </div>
    </div>
  );
};
