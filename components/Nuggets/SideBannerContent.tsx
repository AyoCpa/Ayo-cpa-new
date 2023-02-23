import { inter, ubuntu } from "@/utils/fonts";
import { useRouter } from "next/router";

type SideBannerContentProps = {
  mainText: string;
  currentPage?: string;
  extra?: { url: string; title: string }[];
};

export const SideBannerContent = ({
  mainText,
  currentPage,
  extra,
}: SideBannerContentProps) => {
  const router = useRouter();
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
        /{" "}
        {extra?.length ? (
          extra.map((item, index, root) => {
            return (
              <span
                key={index}
                className={` ${
                  index == extra.length - 1
                    ? "text-[#AAAAAA]"
                    : "text-[#E6E6E6] cursor-pointer"
                }`}
                onClick={() => {
                  router.push(item.url);
                }}
              >
                {item.title} {index !== extra.length - 1 && "/ " }
              </span>
            );
          })
        ) : (
          <span className="text-[#AAAAAA]">{currentPage}</span>
        )}{" "}
      </div>
    </>
  );
};
