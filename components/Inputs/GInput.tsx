import React from 'react'
import inputProfile from "../../public/ASSETS/ICONS/profile-input.svg"
import Image from "next/image"
import {inter , ubuntu} from "@/utils/fonts"


type GInputProps = {
  image: File,
  placeholder: String,
  name: String,

}

function GInput({image , placeholder , name}:GInputProps) {
  const imageInputStyle = "absolute top-2 left-2";
  const inputStyle = `w-full py-3 px-12 placeholder-[#5A5A5A]  placeholder:text-xs lg:placeholder:text-base bg-transparent border-[#AAAAAA] border-2 rounded ${inter.variable} font-inter`;
  return (
    <div className="relative mb-4 lg:mb-0">
      <span className={imageInputStyle}>
        <Image src={inputProfile} alt="" />
      </span>

      <input
        name="client_name"
        type="text"
        className={inputStyle}
        placeholder="Client Name"
      />
    </div>
  );
}

export default GInput