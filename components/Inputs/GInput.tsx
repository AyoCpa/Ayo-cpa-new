import React, { useState } from "react";
import Image from "next/image";
import { inter, ubuntu } from "@/utils/fonts";
import styles from "./GInput.module.css";

type GInputProps = {
  image: string;
  imageOnFocus: string;
  placeholder: string;
  name: string;
};

function GInput({ image, placeholder, name, imageOnFocus }: GInputProps) {
  const [inputFocused, setInputFocused] = useState(false);
  const imageInputStyle = "absolute top-2.5 left-2";
  const inputStyle = `w-full py-3 px-12 placeholder-[#5A5A5A]  placeholder:text-xs lg:placeholder:text-base bg-transparent border-[#AAAAAA] border-2 rounded ${inter.variable} font-inter`;
  return (
    <div className={` ${inter.variable} font-inter relative mb-4 lg:mb-0`}>
      <span className={imageInputStyle}>
        <Image src={inputFocused ? imageOnFocus : image} alt="" className="w-[20px] h-[20px] lg:w-[36px] lg:h-[32px]" />
      </span>

      <input
        onFocus={() => {
          setInputFocused(true)
        }}
        onBlur={() => {
          setInputFocused(false)
        }}
        name={name}
        type="text"
        className={styles.inputStyle}
        placeholder={placeholder}
      />
    </div>
  );
}

export default GInput;
