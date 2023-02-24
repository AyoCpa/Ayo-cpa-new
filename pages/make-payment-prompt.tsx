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

function MakePaymentPrompt() {
  const router = useRouter();
  return (
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
          <Row justify={"center"}>
            <Col xs={22} lg={16}>
              <Row gutter={{xs:0, lg:80}}>
                <Col xs={24} lg={12}>
                  <div className="border-2 border-[#7FBAE6] px-6 py-8">
                    <p
                      className={`${ubuntu.variable} font-ubuntu text-[#1E1E1E] text-lg lg:text-2xl font-bold`}
                    >
                      Continue as an existing Client
                    </p>
                    <p
                      className={`${inter.variable} font-inter text-sm lg:text-lg text-[#5A5A5A] my-4 lg:h-[100px]`}
                    >
                      Quickly and securely make payments for your business
                      Profile(s) on the Client Portal, proceed to the Client
                      Portal
                    </p>

                    <ButtonWithNoIcon
                      text="Client Portal"
                      dark={true}
                      alignCenter={false}
                    />
                  </div>
                </Col>

                <Col xs={24} lg={12}>
                  <div className="border-2 border-[#464646] px-6 py-8 mt-16 lg:mt-0">
                    <p
                      className={`${ubuntu.variable} font-ubuntu text-[#1E1E1E] text-lg lg:text-2xl font-bold`}
                    >
                      Continue as a Guest
                    </p>
                    <p
                      className={`${inter.variable} font-inter text-sm lg:text-lg text-[#5A5A5A] my-4  lg:h-[100px]`}
                    >
                      Make payments for your business Profile(s) quickly and
                      securely as a quest.
                    </p>

                    <ButtonWithIcon
                      text="Proceed"
                      dark={true}
                      alignCenter={false}
                      handleRoute={() => router.push("/make-payment-as-guest")}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
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
  );
}

export default MakePaymentPrompt;
