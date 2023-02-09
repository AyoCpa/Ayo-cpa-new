import arrowRight from "@/public/ASSETS/ICONS/arrow-right.svg";
import arrowRightDark from "@/public/ASSETS/ICONS/arrow-right-dark.svg";
import Image from "next/image";
import { inter } from "@/utils/fonts";

type ButtonProps = {
  text: string;
  alignCenter?: boolean;
  dark?: boolean;
}; //use interfaces for defining types.

export const ButtonWithIcon = ({
  text,
  alignCenter = true,
  dark = false,
}: ButtonProps) => {
  return (
    <div className={`flex ${alignCenter && "justify-center"}`}>
      <div
        className={`${inter.variable} ${
          dark ? "text-black" : "text-white"
        } font-inter px-4 py-2 border ${
          dark ? "border-black" : "border-white"
        } flex items-center cursor-pointer`}
      >
        <div>{text}</div>
        <div className="ml-1">
          <Image src={dark ? arrowRightDark : arrowRight} alt="arrowRight" />
        </div>
      </div>
    </div>
  );
};

export const ButtonWithNoIcon = ({
  text,
  alignCenter = true,
  dark = false,
}: ButtonProps) => {
  return (
    <div className={`flex ${alignCenter && "justify-center"}`}>
      <div
        className={`${inter.variable} ${
          dark ? "text-black" : "text-white"
        } font-inter px-4 py-2 border ${
          dark ? "border-black" : "border-white"
        } flex items-center cursor-pointer`}
      >
        <div>{text}</div>
      </div>
    </div>
  );
};
