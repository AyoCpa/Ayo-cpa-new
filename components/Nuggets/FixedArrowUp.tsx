import React, { useEffect, useState } from 'react';
import arrowDown from "../../public/ASSETS/ICONS/arrow-up.svg";
import Image from "next/image";

function FixedArrowUp() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll" , () => {
      window.scrollY > 20 ? setShowTop(true) : setShowTop(false);
    })
  } , [])
  return (
    <>
      {showTop && (
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-16 z-10 right-16 cursor-pointer"
        >
          <Image src={arrowDown} alt="arrow-up" />
        </div>
      )}
    </>
  );
}

export default FixedArrowUp