import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Statement | Ayo & Company</title>
        <meta name="description" content="Find out how we collect, store, and use data while on our websites." />
        <meta property="og:title" content="Privacy Statement | Ayo & company" />
        <meta property="og:description" content="Find out how we collect, store, and use data while on our websites." />
        <meta property="og:image" content="/remote-access.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <section>
          <Navbar />
        </section>

        <section>
          <FixedArrowUp />
        </section>

        <section className={styles.termsOfService}>
          <div className="text-white ml-10 mt-24">
            <SideBannerContent mainText="Privacy statement" currentPage="privacy" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Privacy;
