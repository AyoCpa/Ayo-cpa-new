import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { Row, Col } from "antd";
import { inter } from "@/utils/fonts";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

function Accessibility() {
  return (
    <>
      <Head>
        <title>Accessibility | Ayo & Company</title>
        <meta name="description" content="Find out our committment to dveloping an inclusive solution and the specifications we work hard to meet." />
        <meta property="og:title" content="Accessibility | Ayo & company" />
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
          <SideBannerContent
            mainText="Accessibility"
            currentPage="Accessibility"
          />
        </div>
      </section>

      <section className="py-10 bg-[#e5e5e5]">
        <Row justify={"center"}>
          <Col xs={20} lg={18}>
            <div className={`${inter.variable} font-inter text-[#1E1E1E]`}>
              <p className="font-semibold py-4">Statement of Commitment</p>
              <p>
                <p className="pb-8">
                  Ayo & Company Professional Corporation is committed to
                  ensuring equal access and participation for people with
                  disabilities, and to excellence in serving all clients, job
                  applicants and employees in a manner that is consistent with
                  the principles of independence, dignity, integration and
                  equality of opportunity for people with disabilities.
                </p>
                <p>
                  We believe in integration and equal opportunity. We are
                  committed to meeting the needs of persons with disabilities in
                  a timely manner and will do so by preventing and removing
                  barriers to accessibility. We are committed to making every
                  reasonable effort to accommodate people with disabilities,
                  provided such accommodation does not cause Ayo & Company
                  Professional Corporation undue hardship.
                </p>
                <p className="py-8 font-semibold">Feedback:</p>
                If you wish to send feedback to Ayo & Company Professional
                Corporation on our services, please contact us by email or
                letter mail.
                <p className="py-4">Email: info@ayocpa.ca</p>
                Mailing Address: Ayo & Company Professional Corporation
                <br />
                <br />
                #201, 4807 – 51 Street 
                <br />
                 P.O. Box 540 Stn Main, <br /> Cold Lake, AB T9M
                1P2
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <HireFlash />
      <ServiceFlash />
      <Footer />
    </div>
    </>
  );
}

export default Accessibility;
