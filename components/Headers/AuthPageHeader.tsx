import React from 'react'
import {ubuntu, inter} from "@/utils/fonts"

type AuthPagesHeaderProps = {
    header: string,
    subHeader: string
}
function AuthPageHeader({header , subHeader}: AuthPagesHeaderProps) {
  return (
    <div>
      <p className={`text-[#1E1E1E] text-xl font-bold ${ubuntu.variable} font-ubuntu`}>{header}</p>
      <p className={`text-sm text-[#1E1E1E] ${inter.variable} font-inter`}>{subHeader}</p>
    </div>
  );
}

export default AuthPageHeader