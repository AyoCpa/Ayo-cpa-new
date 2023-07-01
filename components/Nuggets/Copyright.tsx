import React from "react";
import { inter } from "@/utils/fonts";

type CopyrightProps = {
  portalCopyright?: boolean;
};

function Copyright({ portalCopyright = false }: CopyrightProps) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-4">
      <p
        className={`${inter.variable} text-xs font-inter
        ${portalCopyright ? "text-black" : "text-white"}`}
      >
        © {currentYear} Ayo & Company Chartered Professional Accountant
      </p>
    </div>
  );
}

export default Copyright;
