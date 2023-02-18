import { ubuntu } from "@/utils/fonts";

type pageSubHeaderProps = {
  text: string;
  larger?: boolean;
};

export const PagesSubHeader = ({
  text,
  larger = false,
}: pageSubHeaderProps) => {
  return (
    <div
      className={`text-center pt-12 w-3/5 ${
        larger ? "lg:w-[40%]" : "lg:w-[30%]"
      }  mx-auto mb-0`}
    >
      <span
        className={`${ubuntu.variable} font-ubuntu font-bold text-xl lg:text-4xl text-[#1E1E1E]`}
      >
        {text}
      </span>
    </div>
  );
};
