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
import Image from "next/image";
import { AuthButton } from "@/components/Buttons/AuthButton";

function MakePaymentAsGuest() {
  const headerStyle = `${ubuntu.variable} font-ubuntu mb-8 text-xl font-semibold`;
  const imageInputStyle = "absolute top-2 left-2";
  const inputStyle = `w-full py-3 px-12 placeholder-[#5A5A5A] bg-transparent border-[#AAAAAA] border-2 rounded ${inter.variable} font-inter`;
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
            <Col xs={16}>
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
            <Col xs={16}>
              <form action="">
                <p className={headerStyle}>User Information</p>
                <Row gutter={40} className="mb-12">
                  <Col xs={12}>
                    <div className="relative">
                      <span className={imageInputStyle}>
                        <Image src={inputProfile} alt="" />
                      </span>

                      <input
                        name="client_name"
                        type="text"
                        className={inputStyle}
                        placeholder="Client Name"
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="relative">
                      <span className={imageInputStyle}>
                        <Image src={inputEmail} alt="" />
                      </span>

                      <input
                        name="email_address"
                        type="text"
                        className={inputStyle}
                        placeholder="Email Address"
                      />
                    </div>
                  </Col>
                </Row>
                <section className="mb-12">
                  <div className="mb-8">
                    <p
                      className={`${ubuntu.variable} font-ubuntu mb-2 text-xl font-semibold`}
                    >
                      Enter Profile
                    </p>
                    <p
                      className={`${inter.variable} text-sm font-inter text-[#5A5A5A]`}
                    >
                      Input Profile(s) which payments will be applied
                    </p>
                  </div>

                  <Row gutter={40}>
                    <Col xs={12} className="mb-4">
                      <div className="relative">
                        <span className={imageInputStyle}>
                          <Image src={inputProfileHalf} alt="" />
                        </span>

                        <input
                          name="email_address"
                          type="text"
                          className={inputStyle}
                          placeholder="Profile Name"
                        />
                      </div>
                      <div>
                        <p
                          className={`${inter.variable} text-[#1A1229] cursor-pointer py-2 font-inter`}
                        >
                          + Add more Profile
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={40}>
                    <Col xs={12}>
                      <div className="relative">
                        <span className={imageInputStyle}>
                          <Image src={inputCoin} alt="" />
                        </span>

                        <input
                          name="email_address"
                          type="text"
                          className={inputStyle}
                          placeholder="Enter amount"
                        />
                      </div>
                    </Col>
                  </Row>
                </section>

                <section>
                  <div>
                    <p className={headerStyle}>Payment Method</p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="pt-1">
                          <input
                            type="radio"
                            className=" cursor-pointer w-[18px] h-[18px]"
                          />
                        </div>
                        <p
                          className={`ml-4 ${inter.variable} font-inter text-[#5A5A5A] text-lg`}
                        >
                          Online Payment
                        </p>
                      </div>

                      <div className="flex items-center ml-10">
                        <div className="pt-1">
                          <input
                            type="radio"
                            className=" cursor-pointer w-[18px] h-[18px]"
                          />
                        </div>
                        <p
                          className={`ml-4 ${inter.variable} font-inter text-[#5A5A5A] text-lg`}
                        >
                          E-Transfer
                        </p>
                      </div>

                      <div className="flex items-center ml-10">
                        <div className="pt-1">
                          <input
                            type="radio"
                            className=" cursor-pointer w-[18px] h-[18px]"
                          />
                        </div>
                        <p
                          className={`ml-4 ${inter.variable} font-inter text-[#5A5A5A] text-lg`}
                        >
                          Cheques
                        </p>
                      </div>
                    </div>
                  </div>

                  <Row gutter={40} className="mt-10">
                    <Col xs={12}>
                      <div className="relative">
                        <span className={imageInputStyle}>
                          <Image src={inputCard} alt="" />
                        </span>

                        <input
                          name="client_name"
                          type="text"
                          className={inputStyle}
                          placeholder="Card Name"
                        />
                      </div>
                    </Col>

                    <Col xs={12}>
                      <div className="relative">
                        <span className={imageInputStyle}>
                          <Image src={inputCard} alt="" />
                        </span>

                        <input
                          name="client_name"
                          type="text"
                          className={inputStyle}
                          placeholder="Card Number"
                        />
                      </div>
                    </Col>

                    <Col xs={12} className="mt-8">
                      <Row gutter={20}>
                        <Col xs={12}>
                          <div className="relative">
                            <span className={imageInputStyle}>
                              <Image src={inputCard} alt="" />
                            </span>

                            <input
                              name="client_name"
                              type="text"
                              className={inputStyle}
                              placeholder="Expiry Date"
                            />
                          </div>
                        </Col>
                        <Col xs={12}>
                          <div className="relative">
                            <span className={imageInputStyle}>
                              <Image src={inputCard} alt="" />
                            </span>

                            <input
                              name="client_name"
                              type="text"
                              className={inputStyle}
                              placeholder="Cvv"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </section>

                <div>
                    <AuthButton />
                </div>
              </form>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
}

export default MakePaymentAsGuest;
