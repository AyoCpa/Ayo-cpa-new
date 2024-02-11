import arrowRight from "@/public/ASSETS/ICONS/arrow-right.svg";
import arrowRightDark from "@/public/ASSETS/ICONS/arrow-right-dark.svg";
import Image from "next/image";
import { inter } from "@/utils/fonts";
import { Router, useRouter } from "next/router"

type ButtonProps = {
  text: string;
  alignCenter?: boolean;
  dark?: boolean;
  handleRoute?: Function;
  url?: string;
}; //use interfaces for defining types.

export const ButtonWithIcon = ({
  text,
  alignCenter = true,
  dark = false,
  url="",
  handleRoute = () => {},
}: ButtonProps) => {
  const router = useRouter();

  return (
    <div
      className={`flex ${alignCenter && "justify-center"}`}
      onClick={() => router.push(url)}
    >
      <div
        className={`${inter.variable} ${
          dark ? "text-black" : "text-white"
        } font-inter px-4 py-2 border ${
          dark ? "border-black" : "border-white"
        } flex items-center cursor-pointer lg:text-base text-xs`}
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
  handleRoute = () => {},
  url,
}: ButtonProps) => {
  const router = useRouter()
  return (
    <div
      className={`flex ${alignCenter && "justify-center"}`}
      onClick={() => router.push(url) }
    >
      <div
        className={`${inter.variable} ${
          dark ? "text-black" : "text-white"
        } font-inter px-4 py-2 border ${
          dark ? "border-black" : "border-white"
        } flex items-center cursor-pointer lg:text-base text-xs`}
      >
        <div>{text}</div>
      </div>
    </div>
  );
};
