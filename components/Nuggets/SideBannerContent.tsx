import { inter, ubuntu } from "@/utils/fonts";
import {useRouter} from "next/router"

type SideBannerContentProps = {
  mainText: string;
  currentPage: string;
};

export const SideBannerContent = ({
  mainText,
  currentPage,
}: SideBannerContentProps) => {
    const router = useRouter()
  return (
    <>
      <div className={`${ubuntu.variable} font-ubuntu text-xl lg:text-4xl`}>
        {mainText}
      </div>

      <div className={`${inter.variable} font-inter text-xs lg:text-lg mt-2 `}>
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer text-[#E6E6E6]"
        >
          Home
        </span>{" "}
        / <span className="text-[#AAAAAA]">{currentPage}</span>{" "}
      </div>
    </>
  );
};
