import React from "react";
import { inter, ubuntu } from "@/utils/fonts";

export const SectionHeader = ({ text }: { text: string }) => {
  return (
    <>
      <p
        className={`${ubuntu.variable} font-ubuntu mb-10 text-lg lg:text-xl font-semibold`}
      >
        {text}
      </p>
    </>
  );
};
