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
      <Navbar currentPage="about" />
      <FixedArrowUp />
      <section className={styles.aboutBanner}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent mainText="About Us" currentPage="About" />
        </div>
      </section>
      <section className="bg-[#efefef] pb-16">
        <PagesSubHeader text="We are tested and trusted with the numbers." />

        <div className="mt-16 w-[90%] lg:w-4/5 mx-auto text-[#5A5A5A]">
          <span className={`${inter.variable} font-inter lg:text-lg text-sm`}>
            Our Philosophy: In an industry often navigated through impersonal
            interactions, Ayo CPA stands apart. Founded on the principles of
            unwavering customer service, our firm believes in the power of
            listening, understanding, and meticulously tailoring our services to
            meet each client&apos;s individual needs. From the moment you step
            through our doors, you&apos;re not just a client; you &apos;re part
            of the Ayo family
            <br />
            <br />
            Our Mission: To redefine the accounting experience, combining
            personalized advice and state-of-the-art technology to empower our
            clients towards financial success.
          </span>
        </div>
      </section>
      {/* <section>
        <HireFlash />
      </section> */}

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
