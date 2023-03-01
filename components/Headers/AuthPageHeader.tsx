import React from 'react'
import {ubuntu, inter} from "@/utils/fonts"

type AuthPagesHeaderProps = {
    header: string,
    subHeader: string
}
function AuthPageHeader({header , subHeader}: AuthPagesHeaderProps) {
  return (
    <div className='mt-4'>
      <p className={`text-[#1E1E1E] text-lg lg:text-xl font-bold ${ubuntu.variable} font-ubuntu`}>{header}</p>
      <p className={`lg:text-sm text-xs text-[#1E1E1E] ${inter.variable} font-inter mt-1`}>{subHeader}</p>
    </div>
  );
}

export default AuthPageHeader