import React, { useState , useEffect } from "react";
import x_ from "@/public/ASSETS/ICONS/mobileXButton.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { inter } from "@/utils/fonts";
import { closeMobileNav } from "@/redux/reducers/mobileNavReducer";
import { useRouter } from "next/router";
import arrow_left from "@/public/ASSETS/ICONS/moreActionRight.svg";
import arrow_down from "@/public/ASSETS/ICONS/text-arrow-down.svg";
import Link from "next/link";

export const MobileNav = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [collapsedItem, setCollapsedItem] = useState(false);
  // useEffect(() => {
  //   return () => {
  //     dispatch(closeMobileNav());
  //   };
  // }, []);

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
              dispatch(closeMobileNav());
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
              router.push("/blog");
              dispatch(closeMobileNav());
            }}
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            Blog
          </p>
          {/* <p
            onClick={() => {
              router.push("/file-my-taxes");
              dispatch(closeMobileNav());
            }}
            className={`${inter.variable} cursor-pointer text-right mt-4 font-inter text-[#EFEFEF] font-semibold`}
          >
            File My Taxes
          </p> */}
          <p
            className={`${inter.variable} cursor-pointer text-right mt-4 flex-col justify-end items-center font-inter text-[#EFEFEF] font-semibold`}
          >
            <div
              className="flex justify-end items-center"
              onClick={() => {
                setCollapsedItem(!collapsedItem);
              }}
            >
              <span className="pr-3">
                <Image
                  src={collapsedItem ? arrow_down : arrow_left}
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
              <span>More Actions</span>
            </div>
            {collapsedItem && (
              <div>
                <p
                  className="text-xs font-normal my-3 cursor-pointer"
                  onClick={() => {
                    dispatch(closeMobileNav());
                  }}
                >
                  <Link href="/submit-file-as-new-client">Submit document</Link>
                </p>
                <p
                  className="text-xs font-normal my-3 cursor-pointer"
                  onClick={() => {
                    dispatch(closeMobileNav());
                  }}
                >
                  <Link href="/book-an-appointment">Book an appointment</Link>
                </p>
                <p
                  className="text-xs font-normal my-3 cursor-pointer"
                  onClick={() => {
                    dispatch(closeMobileNav());
                  }}
                >
                  <Link href="/make-payment-as-guest">Payment</Link>
                </p>
                <p
                  className="text-xs font-normal my-3 cursor-pointer"
                  onClick={() => {
                    dispatch(closeMobileNav());
                  }}
                >
                  <Link href="/remote-access">Remote access</Link>
                </p>
              </div>
            )}
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
          <Link href={"https://ayocpa.clientportal.com"}>
            <div
              className={`${inter.variable} cursor-pointer text-right mt-4 pt-3 font-inter text-[#EFEFEF] font-semibold`}
            >
              <span className="border px-6 py-3">Client Portal</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
