import React from 'react'
import {inter } from "@/utils/fonts"

function Copyright() {
    const currentYear = new Date().getFullYear()
  return (
    <div className="mt-4">
      <p className={`text-[#E6E6E6] ${inter.variable} text-xs font-inter`}>
        © {currentYear} Ayo & Company Chartered Professional Accountant
      </p>
    </div>
  );
}

export default Copyright