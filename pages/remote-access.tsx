import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PageSideSubHeader } from "@/components/Nuggets/PageSideSubHeader";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";

function RemoteAccess() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <FixedArrowUp />
      </section>

      <section className={styles.remoteAccessCol}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Remote Access"
            currentPage="Remote Access"
          />
        </div>
      </section>

      <div className="bg-[#efefef]">
        <section>
          <PageSideSubHeader
            mainText="Remote Access"
            subText="Give us permission to access your PC remotely"
          />
        </section>

        {/* Add the remaining content here  */}
      </div>

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

export default RemoteAccess;
