import React from "react";
import x_ from "@/public/ASSETS/ICONS/mobileXButton.svg"
import Image from "next/image"
import { useDispatch } from "react-redux";
import { inter } from "@/utils/fonts";
import { closeMobileNav } from "@/redux/reducers/mobileNavReducer";
import { useRouter } from "next/router";

export const MobileNav = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <div className="lg:hidden fixed top-0 w-full bg-[#1A1229] z-20 min-h-screen">
      <div className="flex justify-end px-8 py-10 flex-col items-end">
        <div
          className="py-2 cursor-pointer"
          onClick={() => {
            dispatch(closeMobileNav());
          }}
        >
          <Image src={x_} alt="" />
        </div>
        <div>
          <p
            onClick={() => {
              router.push("/about");
            }}
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            About
          </p>
          <p
            onClick={() => {
              router.push("/service");
              dispatch(closeMobileNav());
            }}
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            Services
          </p>
          <p
            onClick={() => {
              router.push("/resource");
              dispatch(closeMobileNav());
            }}
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            Resources
          </p>
          <p
            onClick={() => {
              router.push("/file-my-taxes");
              dispatch(closeMobileNav());
            }}
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            File My Taxes
          </p>
          <p
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            More Actions
          </p>
          {/* <p className={`${inter.variable} text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}>Ayo234</p> */}
          <p
            onClick={() => {
              router.push("/contact");
              dispatch(closeMobileNav());
            }}
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            Contact us
          </p>
          <div
            className={`${inter.variable} cursor-pointer text-right mt-4 pt-3 font-inter text-[#EFEFEF] font-semibold`}
          >
            <span className="border px-6 py-3">Client Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
