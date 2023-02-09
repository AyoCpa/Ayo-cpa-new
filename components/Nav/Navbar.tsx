import logo from "@/public/ASSETS/LOGOS/logo.svg";
import { ubuntu, inter } from "@/utils/fonts";
import Image from "next/image";
import textArrowDown from "../../public/ASSETS/ICONS/text-arrow-down.svg";
import user from "@/public/ASSETS/ICONS/user_icon.svg"
import { useReducer } from "react";
import { ButtonWithNoIcon } from "../Buttons/ActionButton";

const Navbar = () => {
  return (
    <div
      className={`${inter.variable} font-inter fixed top-0 w-full z-10 flex flex-row justify-between px-12 py-4 text-white items-center`}
    >
      <div className="">
        <Image src={logo} alt="ayocpa's logo" />
      </div>

      <div className="flex flex-row justify-between w-1/2 items-center text-[#EFEFEF]">
        <span className="cursor-pointer">About</span>
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
        <div className="border border-1 border-white px-2 py-2 cursor-pointer">
          <Image src={user} alt="user_icon" />
        </div>

        <div className="ml-4">
          <ButtonWithNoIcon text="Client Portal" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
