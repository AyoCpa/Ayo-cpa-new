import React, { useState } from "react";
import Image from "next/image";
import { inter, ubuntu } from "@/utils/fonts";
import styles from "./GInput.module.css";
import eyeOpen from "@/public/ASSETS/ICONS/eyeOpen.svg";

type GInputProps = {
  image: string;
  imageOnFocus: string;
  placeholder: string;
  name: string;
  passwordType?: boolean;
};

// Note: The blur function would only trigger once , whether it achieves what it can achieve or not , it would only trigger once but it would be noticed that the password show/hide icon would only trigger outside the focus of the input field , therefore the moment it is clicked the onBlur function triggers. Hence , the hassle that was done beneath , meaning that everytime the onBlur function has triggered then , onMouseOut from the icon would make the input loose focus

function GInput({
  image,
  placeholder,
  name,
  imageOnFocus,
  passwordType = false,
}: GInputProps) {
  const [inputFocused, setInputFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [onBlurTriggered, setOnBlurredTriggered] = useState(false);
  const imageInputStyle = "absolute top-2.5 left-2";
  const inputStyle = `w-full py-3 px-12 placeholder-[#5A5A5A]  placeholder:text-xs lg:placeholder:text-base bg-transparent border-[#AAAAAA] border-2 rounded ${inter.variable} font-inter`;
  return (
    <div className={` ${inter.variable} font-inter relative mb-4 lg:mb-0`}>
      <span className={imageInputStyle}>
        <Image
          src={inputFocused ? imageOnFocus : image}
          alt=""
          className="w-[28px] h-[28px] lg:w-[36px] lg:h-[32px]"
        />
      </span>

      {passwordType && (
        <span
          onMouseEnter={() => {
            setMouseEnter(true);
          }}
          onMouseOut={() => {
            if(onBlurTriggered){
              setInputFocused(false)
              setOnBlurredTriggered(false)
            }
            setMouseEnter(false);
          }}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className={`absolute right-4 top-4 cursor-pointer ${
            inputFocused ? "inline" : "hidden"
          }`}
        >
          <Image src={eyeOpen} alt="" />
        </span>
      )}

      <input
        style={{
          border: inputFocused ? "2px solid #312a3e" : "2px solid #aaaaaa",
          
        }}
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => {
          if (mouseEnter && passwordType) {
            setOnBlurredTriggered(true)
            return;
          }
          setInputFocused(false);
        }}
        name={name}
        type={passwordType && !showPassword ? "password" : "text"}
        className={styles.inputStyle}
        placeholder={placeholder}
      />
    </div>
  );
}

export default GInput;
