import React from 'react'
import markX from "@/public/ASSETS/ICONS/mark-x.svg"
import Image from "next/image"
import {useRouter} from "next/router"

function Cancel() {
  const router = useRouter()
  return (
    // Do not forget to add relative to the parent Element
    <div className='absolute top-6 right-10 cursor-pointer' onClick={() => {router.push("/")}}>
        <Image src={markX} alt='Mark-X' />
    </div>
  )
}

export default Cancel