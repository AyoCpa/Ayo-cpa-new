import React from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { inter, ubuntu } from "@/utils/fonts";
import { Row, Col } from "antd";
import {
  ButtonWithIcon,
  ButtonWithNoIcon,
} from "@/components/Buttons/ActionButton";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import { IdentityOption } from "@/components/Nuggets/IdentityOption";
import Head from "next/head";

function MakePaymentPrompt() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Make Payment | Ayo & Company</title>
        <meta name="description" content="Make your payments with ease." />
        <meta property="og:title" content="Make Payment | Ayo & company" />
        <meta property="og:description" content="Make your payments with ease." />
        <meta property="og:image" content="/payment.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <div>
          <Navbar />
        </div>

        <div>
          <FixedArrowUp />
        </div>
        <section className={styles.paymentBanner}>
          <div className="text-white ml-10 mt-24">
            <SideBannerContent mainText="Make Payments" currentPage="Payments" />
          </div>
        </section>

        <div className="bg-[#efefef]">
          <section>
            <PagesSubHeader text="Secure payments for your Client Portal proceedings" />
          </section>

          <section className="py-20">
            <IdentityOption
              blueBorderHead="Continue as an existing Client"
              blueBorderText="Quickly and securely make payments for your business Profile(s) on the Client Portal, proceed to the Client Portal"
              blueBorderButtonText="Client Portal"
              blackBorderHead="Continue as a Guest"
              blackBorderText="Make payments for your business Profile(s) quickly and securely as a quest."
              blackBorderButtonText="Proceed"
            />
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
        </div>
      </div>
    </>
  );
}

export default MakePaymentPrompt;
