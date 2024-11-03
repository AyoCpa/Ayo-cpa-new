import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import React from "react";
import styles from "../styles/Home.module.css";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { Col, Row } from "antd";
import { IdentityOption } from "@/components/Nuggets/IdentityOption";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

function FileMyTaxes() {
  return (
    <>
      <Head>
        <title>Tax Filing | Ayo & Company</title>
        <meta name="description" content="We help with personal and corporate tax filing for T1 and T2 tax returns using our vast experience." />
        <meta name="keywords" content="income tax, tax filing, corporate tax returns T1 tax return filings" />
        <meta property="og:title" content="Tax Filing | Ayo & company" />
        <meta property="og:description" content="We help with personal and corporate tax filing for T1 and T2 tax returns using our vast experience." />
        <meta property="og:image" content="/file-my-tax.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Navbar currentPage="taxes" />
      </div>
      <section>
        <FixedArrowUp />
      </section>

      <section className={styles.taxesCol}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="File My Taxes"
            currentPage="File My Taxes"
          />
        </div>
      </section>
      <div className="bg-[#efefef]">
        <section>
          <PagesSubHeader
            text="With us, you file your taxes the 
simple way"
          />
        </section>

        <section className="py-20">
          <IdentityOption
            blueBorderHead="Personal Tax"
            blueBorderText="Let us help with your T1 General Income Tax and Benefit Return to calculate your annual tax liability and get federal or provincial benefits such as the GST/HST Credit."
            blueBorderButtonText="Proceed"
            blueBorderButtonIcon={true}
            blackBorderHead="Corporate Tax"
            blackBorderText="We have in-depth expertise in corporate taxes. We are therefore familiar with the intricacies of preparing a T2 tax return."
            blackBorderButtonText="Proceed"
          />
        </section>
      </div>

      <section>
        <ServiceFlash />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default FileMyTaxes;
