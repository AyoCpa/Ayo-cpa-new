import arrowRight from "@/public/ASSETS/ICONS/arrow-right.svg";
import Image from "next/image";
import { inter, ubuntu } from "@/utils/fonts";

type AuthButtonProps = {
  text: string;
  active: boolean;
};

export const AuthButton = ({ text, active }: AuthButtonProps) => {
  return (
    <div className="flex">
      <div className="flex items-center border bg-[#D2D2D2] py-3 px-4 rounded mt-3 cursor-pointer">
        <div className={`${inter.variable} font-inter lg:text-base text-xs text-white px-1 `}>
          <input type="submit" value={text} />
        </div>
        <div>
          <Image src={arrowRight} alt="" />
        </div>
      </div>
    </div>
  );
};
