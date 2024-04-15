import { inter, ubuntu } from "@/utils/fonts";
import { useRouter } from "next/router";

type SideBannerContentProps = {
  currentPage?: string;
  extra?: { name: string, _id: string }[];
};

export const TagContainer = ({
  currentPage,
  extra,
}: SideBannerContentProps) => {
  const router = useRouter();
  return (
    <>
      <div className={`${ubuntu.variable} font-ubuntu text-xl lg:text-4xl mb-4`}>
       Tags
      </div>

      <div className={`${inter.variable} font-inter flex gap-2  text-xs lg:text-lg mt-2 `}>
       
        {" "}
        {extra?.length ? (
          extra.map((item, index, root) => {
            return (
              <span
                key={index}
                className={` border rounded-lg border-[#E6E6E6] px-4 py-2 
                     text-[#E6E6E6] cursor-pointer
                `}
              >
                {item.name} 
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
