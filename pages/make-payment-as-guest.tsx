import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { Col, Row } from "antd";
import { ubuntu, inter } from "@/utils/fonts";
import inputEmail from "../public/ASSETS/ICONS/email-input.svg";
import inputProfile from "../public/ASSETS/ICONS/profile-input.svg";
import inputProfileHalf from "../public/ASSETS/ICONS/input-profile-half.svg";
import inputCoin from "../public/ASSETS/ICONS/input-coin.svg";
import inputCard from "../public/ASSETS/ICONS/input-card.svg";

function MakePaymentAsGuest() {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <section>
        <FixedArrowUp />
      </section>

      <section className={styles.paymentBanner}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Make Payments"
            extra={[
              { title: "Payments", url: "/make-payment-prompt" },
              { title: "Guest", url: "" },
            ]}
          />
        </div>
      </section>

      <div className="bg-[#efefef] pt-20">
        <section className="pb-20">
          <Row justify={"center"}>
            <Col xs={18}>
              <div>
                <p
                  className={`${ubuntu.variable} font-ubuntu text-2xl font-semibold tracking-wide`}
                >
                  Making Payment as a Guest
                </p>

                <p
                  className={`${inter.variable} font-inter text-[#6E6E6E] text-lg mt-3`}
                >
                  Secure payments for your Cilent Portal proceedings
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="pb-20">
          <Row justify={"center"}>
            <Col xs={18}>
              <form action="">
                <p
                  className={`${ubuntu.variable} font-ubuntu text-xl font-semibold`}
                >
                  User Information
                </p>
                <Row gutter={20}>
                  <Col xs={12}>
                    <div>
                      <input type="text" />
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div>
                      <input
                        className=" bg-transparent border-[#AAAAAA] border-2"
                        type="text"
                      />
                    </div>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
}

export default MakePaymentAsGuest;
