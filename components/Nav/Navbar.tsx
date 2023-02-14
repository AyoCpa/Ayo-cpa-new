import logo from "@/public/ASSETS/LOGOS/logo.svg";
import { ubuntu, inter } from "@/utils/fonts";
import Image from "next/image";
import textArrowDown from "../../public/ASSETS/ICONS/text-arrow-down.svg";
import user from "@/public/ASSETS/ICONS/user_icon.svg";
import { useEffect, useState } from "react";
import { ButtonWithNoIcon } from "../Buttons/ActionButton";
import logoColored from "@/public/ASSETS/LOGOS/logo-colored.svg";
import userDark from "@/public/ASSETS/ICONS/user-dark.svg";
import hamburgerWhite from "@/public/ASSETS/ICONS/hamburger-white.svg";
import hamburgerBlack from "@/public/ASSETS/ICONS/hamburger-black.svg";
import underline from "@/public/ASSETS/ICONS/underline.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter()
  const isLoggedIn = false;
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  return (
    <div
      className={`${
        inter.variable
      } font-inter fixed top-0 w-full z-10 flex flex-row justify-between ${
        scrollPos > 10 && "bg-white"
      } px-12 py-4 text-white items-center`}
    >
      <div className="">
        <Image src={scrollPos > 10 ? logoColored : logo} alt="ayocpa's logo" />
      </div>

      <div
        className={`xl:flex hidden flex-row justify-between w-1/2 items-center ${
          scrollPos > 10 ? "text-[#1A1229]" : "text-[#EFEFEF]"
        }`}
      >
        <span className="cursor-pointer relative" onClick={() => {
          router.push("/about")
        }}>
          About
          <span className="absolute">
            <Image src={underline} alt="underline" />
          </span>
        </span>
        <span className="cursor-pointer">Services</span>
        <span className="cursor-pointer">Resources</span>
        <span className="cursor-pointer">File My Taxes</span>
        <span className="flex flex-row items-center cursor-pointer">
          More Actions
          <span className="pl-2">
            <Image src={textArrowDown} alt="text-arrow-down" />
          </span>
        </span>
        <span className="cursor-pointer">Ayo234</span>
        <span className="cursor-pointer">Contact us</span>
      </div>

      <div className="flex items-center">
        <div
          className={`border border-1 ${
            scrollPos > 10 ? "border-black" : "border-white"
          } px-2 py-2 cursor-pointer ${
            scrollPos <= 10 && isLoggedIn
              ? "bg-white"
              : scrollPos > 10 && isLoggedIn
              ? "bg-[#2E263D]"
              : scrollPos <= 10 && !isLoggedIn
              ? ""
              : ""
          }`}
        >
          <Image
            src={
              scrollPos <= 10 && isLoggedIn
                ? userDark
                : scrollPos > 10 && isLoggedIn
                ? user
                : scrollPos <= 10 && !isLoggedIn
                ? user
                : userDark
            }
            alt="user_icon"
          />
        </div>

        <div className="hidden xl:block ml-4">
          <ButtonWithNoIcon
            dark={scrollPos > 10 ? true : false}
            text="Client Portal"
          />
        </div>

        <div className="ml-2 xl:hidden cursor-pointer">
          <Image
            src={scrollPos > 10 ? hamburgerBlack : hamburgerWhite}
            alt="hamburger"
            width={35}
            height={35}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
