import { ubuntu } from "@/utils/fonts";

type pageSubHeaderProps = {
    text: string
}

export const PagesSubHeader = ({text}: pageSubHeaderProps) => {
    return (
      <div className="text-center pt-12 w-3/5  lg:w-[30%] mx-auto mb-0">
        <span
          className={`${ubuntu.variable} font-ubuntu text-xl lg:text-4xl text-[#1E1E1E]`}
        >
          {text}
        </span>
      </div>
    );
}