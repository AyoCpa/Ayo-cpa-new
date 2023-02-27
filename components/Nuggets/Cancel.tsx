import React from 'react'
import markX from "@/public/ASSETS/ICONS/mark-x.svg"
import Image from "next/image"

function Cancel() {
  return (
    // Do not forget to add relative to the parent Element
    <div className='absolute top-6 right-10 cursor-pointer'>
        <Image src={markX} alt='Mark-X' />
    </div>
  )
}

export default Cancel