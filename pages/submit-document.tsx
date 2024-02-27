import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { IdentityOption } from "@/components/Nuggets/IdentityOption";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

function SubmitDocument() {
  return (
    <>
      <Head>
        <title>Submit Documents | Ayo & Company</title>
        <meta name="description" content="Submit documents for tax filing and genral accounting." />
        <meta property="og:title" content="Submit Documents | Ayo & company" />
        <meta property="og:description" content="Submit documents for tax filing and genral accounting." />
        <meta property="og:image" content="/submit-document.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <section>
        <Navbar />
      </section>
      <section>
        <FixedArrowUp />
      </section>
      <section className={styles.submitDocCol}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Submit Document"
            currentPage="Submit Document"
          />
        </div>
      </section>

      <div className="bg-[#efefef]">
        <section>
          <PagesSubHeader text="Securely send us your documents for processing" />
        </section>
        <section className="py-20">
          <IdentityOption
            blueBorderHead="Continue as an existing Client"
            blueBorderText="Login to quickly and securely upload all your documents for processing, and access privously uploaded documnets."
            blueBorderButtonText="Login"
            blackBorderHead="New Client"
            blueBorderButtonIcon={true}
            blackBorderText="Register an account to get started as a new client and upload your documents or please contact our team via the button below."
            blackBorderButtonText="Register"
            blackBorderButtonExtra={true}
            blackBorderButtonExtraText="Contact us"
          />
        </section>
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

export default SubmitDocument;
