import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import styles from "@/styles/Home.module.css";
import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import payroll from "@/public/ASSETS/IMAGES/payroll.jpg"
import autoBenefit from "@/public/ASSETS/IMAGES/auto-benefit.jpg"
import pst from "@/public/ASSETS/IMAGES/pst.jpg"
import netfile from "@/public/ASSETS/IMAGES/netFile.jpg"
import cra from "@/public/ASSETS/IMAGES/cra.jpg"
import { ButtonWithIcon } from "@/components/Buttons/ActionButton";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";

function Resource() {
  return (
    <>
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
                      />
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={8}>
                  <div className="border-2 border-[#7FBAE6] p-6 mb-4 mt-16">
                    <Image src={pst} alt="pst image" className="h-[200px]" />

                    <div className="mt-4">
                      <ButtonWithIcon
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
