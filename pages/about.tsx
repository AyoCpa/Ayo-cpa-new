import Navbar from "@/components/Nav/Navbar";
import React from "react";
import styles from "@/styles/Home.module.css";
import { ubuntu, inter } from "@/utils/fonts";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";

function about() {
  return (
    <>
      <Navbar />
      <FixedArrowUp />
      <section className={styles.aboutBanner}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent mainText="About Us" currentPage="About" />
        </div>
      </section>
      <section className="bg-[#E5E5E5] pb-16">
        <PagesSubHeader text="We are tested and trusted with the numbers." />

        <div className="mt-16 w-[90%] lg:w-4/5 mx-auto text-[#5A5A5A]">
          <span className={`${inter.variable} font-inter lg:text-lg text-sm`}>
            Ayo & Company Chartered Professional Accountants is a new name
            representing trusted professionals serving the Lakeland and
            surrounding area since 1964. <br /> <br /> Our services include
            financial statement preparation (under review and compilation
            engagements); personal, corporate and trust tax returns; payroll &
            bookkeeping; and other related accounting and tax services. Our team
            of accountants and technicians provide services to a wide variety of
            clients and industries, including those in retail, farming,
            transportation, oil and gas, professional services and just to
            mention a few. <br /> <br /> We are currently situated at Alberta
            and Saskatchwen, Canada.
          </span>
        </div>
      </section>
      <section>
        <HireFlash />
      </section>

      <section>
        <ServiceFlash />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default about;
