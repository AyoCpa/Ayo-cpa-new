import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import styles from "@/styles/Home.module.css";
import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import payroll from "@/public/ASSETS/IMAGES/payroll.webp";
import autoBenefit from "@/public/ASSETS/IMAGES/auto-benefit.webp";
import pst from "@/public/ASSETS/IMAGES/pst.webp";
import netfile from "@/public/ASSETS/IMAGES/netFile.webp";
import cra from "@/public/ASSETS/IMAGES/cra.webp";
import { ButtonWithIcon } from "@/components/Buttons/ActionButton";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

function Resource() {
  return (
    <>
      <Head>
        <title>Resources | Ayo & Company</title>
        <meta name="description" content="Resources for your Cold Lake Canada accounting, taxation, paroll and filings." />
        <meta name="keywords" content="taxation in Cold Lake Canada, payroll accounting, bookkeeping" />
        <meta property="og:title" content="Resoruces | Ayo & company" />
        <meta property="og:description" content="Resources for your Cold Lake Canada accounting, taxation, paroll and filings." />
        <meta property="og:image" content="/resourceBanner.webp" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <Navbar currentPage="resources" />
      </div>

      <div>
        <FixedArrowUp />
      </div>
      <div className="bg-[#efefef]">
        <section className={styles.resourceBanner}>
          <div className="text-white ml-10 mt-24">
            <SideBannerContent mainText="Resources" currentPage="Resources" />
          </div>
        </section>

        <section>
          <PagesSubHeader text="Assembled list of helpful resources" />
        </section>

        <section className="mt-16 pb-20">
          <Row justify={"center"}>
            <Col xs={20} lg={18}>
              <Row gutter={40}>
                <Col xs={24} lg={8}>
                  <div className="border-2 border-[#7FBAE6] p-6 mb-4 mt-16">
                    <Image
                      src={payroll}
                      alt="payroll image"
                      className="h-[200px]"
                    />

                    <div className="mt-4">
                      <ButtonWithIcon
                        text="Payroll"
                        dark={true}
                        alignCenter={false}
                        url=" https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/payroll-deductions-online-calculator.html"
                      />
                    </div>
                  </div>
                </Col>

                <Col xs={24} lg={8}>
                  <div className="border-2 border-[#7FBAE6] p-6 mb-4 mt-16">
                    <Image
                      src={autoBenefit}
                      alt="autobenefit image"
                      className="h-[200px]"
                    />

                    <div className="mt-4">
                      <ButtonWithIcon
                        text="Auto Benefits"
                        dark={true}
                        alignCenter={false}
                        url="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/automobile-benefits-online-calculator-disclaimer.html "
                      />
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={8}>
                  <div className="border-2 border-[#7FBAE6] p-6 mb-4 mt-16">
                    <Image src={pst} alt="pst image" className="h-[200px]" />

                    <div className="mt-4">
                      <ButtonWithIcon
                        url="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/gst-hst-netfile.html"
                        text="GST / HST and PST"
                        dark={true}
                        alignCenter={false}
                      />
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={8}>
                  <div className="border-2 border-[#7FBAE6] p-6 mb-4 mt-16">
                    <div>
                      <Image
                        src={netfile}
                        alt="netfile image"
                        className="h-[200px]"
                      />
                    </div>

                    <div className="mt-4">
                      <ButtonWithIcon
                        text="GST / HST Netfile"
                        dark={true}
                        alignCenter={false}
                        url="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/gst-hst-netfile.html"
                      />
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={8}>
                  <div className="border-2 border-[#7FBAE6] p-6 mb-4 mt-16">
                    <Image src={cra} alt="cra image" className="h-[200px]" />

                    <div className="mt-4">
                      <ButtonWithIcon
                        text="CRA Forms"
                        dark={true}
                        alignCenter={false}
                        url="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms.html"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section>{/* <HireFlash /> */}</section>

        <section>
          <ServiceFlash />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Resource;
