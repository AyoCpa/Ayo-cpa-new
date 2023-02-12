import React from 'react';
import arrowDown from "../../public/ASSETS/ICONS/arrow-up.svg";
import Image from "next/image";

function FixedArrowUp() {
  return (
    <div className='fixed bottom-16 z-10 right-16 cursor-pointer'>
      <Image
        src={arrowDown}
        alt='arrow-up'
      />
    </div>
  )
}

export default FixedArrowUp