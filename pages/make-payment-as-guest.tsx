import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { Col, Row } from "antd";
import { ubuntu, inter } from "@/utils/fonts";
import inputEmail from "../public/ASSETS/ICONS/email-input.svg";
import inputEmailDark from "../public/ASSETS/ICONS/email-input-dark.svg";
import inputProfile from "../public/ASSETS/ICONS/profile-input.svg";
import inputProfileDark from "../public/ASSETS/ICONS/profile-input-dark.svg";
import inputCoin from "../public/ASSETS/ICONS/input-coin.svg";
import inputCoinDark from "../public/ASSETS/ICONS/input-coin-dark.svg";
import inputCard from "../public/ASSETS/ICONS/input-card.svg";
import inputCardDark from "../public/ASSETS/ICONS/input-card-dark.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { useState, useEffect } from "react";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import GInput from "@/components/Inputs/GInput";
import ValidateEmail from "@/utils/email-validate";
import axios from "axios";

function MakePaymentAsGuest() {
  const [paymentActive, setPaymentActive] = useState(true);
  const [eTransferActive, setETransferActive] = useState(false);
  const [chequeActive, setChequeActive] = useState(false);
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [profileName, setProfileName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [amount, setAmount] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const headerStyle = `${ubuntu.variable} font-ubuntu mb-8 text-lg lg:text-xl font-semibold`;
  const imageInputStyle = "absolute top-2 left-2";
  const inputStyle = `w-full py-3 px-12 placeholder-[#5A5A5A]  placeholder:text-xs lg:placeholder:text-base bg-transparent border-[#AAAAAA] border-2 rounded ${inter.variable} font-inter`;
  const [buttonActive, setButtonActive] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonActive(false);
    let mode = "";
    if (paymentActive) {
      mode = "online_payment";
    } else if (eTransferActive) {
      mode = "e_transfer";
    } else if (chequeActive) {
      mode = "e_transfer";
    }

    const payload = {
      mode,
      cardName,
      cardNumber,
      cvv,
      email,
      profileName,
      clientName,
      amount,
      expiry,
    };

    axios
      .post("/api/payment", payload)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setButtonActive(true);
      });
  };

  useEffect(() => {
    if (paymentActive) {
      if (
        !clientName ||
        !email ||
        !ValidateEmail(email) ||
        !profileName ||
        !amount ||
        !cvv ||
        !expiry ||
        !cardNumber ||
        !cardName
      ) {
        setButtonActive(false);
      } else {
        setButtonActive(true);
      }
    } else {
      if (
        !clientName ||
        !email ||
        !ValidateEmail(email) ||
        !profileName ||
        !amount
      ) {
        setButtonActive(false);
      } else {
        setButtonActive(true);
      }
    }
  }, [
    clientName,
    email,
    profileName,
    expiry,
    amount,
    cvv,
    cardName,
    cardNumber,
    paymentActive,
  ]);

  const handlePaymentMethod = (): void => {};
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
            <Col xs={22} lg={16}>
              <div>
                <p
                  className={`${ubuntu.variable} font-ubuntu text-lg lg:text-2xl font-semibold tracking-wide`}
                >
                  Making Payment as a Guest
                </p>

                <p
                  className={`${inter.variable} font-inter text-[#6E6E6E] text-xs lg:text-lg mt-3`}
                >
                  Secure payments for your Cilent Portal proceedings
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="pb-20">
          <Row justify={"center"}>
            <Col xs={22} lg={16}>
              <form action="" onSubmit={handleFormSubmit}>
                <p className={headerStyle}>User Information</p>
                <Row gutter={{ xs: 0, lg: 40 }} className="mb-12">
                  <Col xs={24} lg={12}>
                    <GInput
                      image={inputProfile}
                      imageOnFocus={inputProfileDark}
                      placeholder="Client Name"
                      name="client_name"
                      handleInputData={setClientName}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <GInput
                      name="email_address"
                      handleInputData={setEmail}
                      image={inputEmail}
                      imageOnFocus={inputEmailDark}
                      placeholder="Email Address"
                    />
                  </Col>
                </Row>
                <section className="mb-12">
                  <div className="mb-8">
                    <p
                      className={`${ubuntu.variable} font-ubuntu mb-2 text-lg lg:text-xl font-semibold`}
                    >
                      Enter Profile
                    </p>
                    <p
                      className={`${inter.variable} text-xs lg:text-sm font-inter text-[#5A5A5A]`}
                    >
                      Input Profile(s) which payments will be applied
                    </p>
                  </div>

                  <Row gutter={{ xs: 0, lg: 40 }}>
                    <Col xs={24} lg={12} className="mb-4">
                      <div className="relative">
                        <GInput
                          name="profile_name"
                          placeholder="Profile Name"
                          image={inputProfile}
                          imageOnFocus={inputProfileDark}
                          handleInputData={setProfileName}
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

                  <Row gutter={{ xs: 0, lg: 40 }}>
                    <Col xs={24} lg={12}>
                      <GInput
                        image={inputCoin}
                        imageOnFocus={inputCoinDark}
                        name="amount"
                        placeholder="Enter amount"
                        handleInputData={setAmount}
                      />
                    </Col>
                  </Row>
                </section>

                <section>
                  <div>
                    <p className={headerStyle}>Payment Method</p>
                    <div className="flex items-center flex-wrap">
                      <div className="flex items-center">
                        <div className="pt-1">
                          <input
                            onClick={() => {
                              setPaymentActive(true);
                              setChequeActive(false);
                              setETransferActive(false);
                            }}
                            type="radio"
                            checked={paymentActive}
                            className=" cursor-pointer w-[18px] h-[18px]"
                          />
                        </div>
                        <p
                          className={`ml-4 ${inter.variable} font-inter text-[#5A5A5A] text-sm lg:text-lg`}
                        >
                          Online Payment
                        </p>
                      </div>

                      <div className="flex items-center ml-4 mr-4 lg:mr-10 lg:ml-10">
                        <div className="pt-1">
                          <input
                            checked={eTransferActive}
                            type="radio"
                            className=" cursor-pointer w-[18px] h-[18px]"
                            onClick={() => {
                              setCardName("");
                              setCardNumber("");
                              setCvv("");
                              setExpiry("");
                              setPaymentActive(false);
                              setChequeActive(false);
                              setETransferActive(true);
                            }}
                          />
                        </div>
                        <p
                          className={`ml-4 ${inter.variable} font-inter text-[#5A5A5A] text-sm  lg:text-lg`}
                        >
                          E-Transfer
                        </p>
                      </div>

                      <div className="flex items-center ">
                        <div className="pt-1">
                          <input
                            checked={chequeActive}
                            type="radio"
                            className=" cursor-pointer w-[18px] h-[18px]"
                            onClick={() => {
                              setCardName("");
                              setCardNumber("");
                              setCvv("");
                              setExpiry("");
                              setPaymentActive(false);
                              setChequeActive(true);
                              setETransferActive(false);
                            }}
                          />
                        </div>
                        <p
                          className={`ml-4 ${inter.variable} font-inter text-[#5A5A5A] text-sm lg:text-lg`}
                        >
                          Cheques
                        </p>
                      </div>
                    </div>
                  </div>

                  {paymentActive && (
                    <Row gutter={{ xs: 0, lg: 40 }} className="mt-10">
                      <Col xs={24} lg={12}>
                        <GInput
                          image={inputCard}
                          imageOnFocus={inputCardDark}
                          name="card_name"
                          placeholder="Card Name"
                          handleInputData={setCardName}
                        />
                      </Col>

                      <Col xs={24} lg={12}>
                        <GInput
                          image={inputCard}
                          imageOnFocus={inputCardDark}
                          name="card_number"
                          placeholder="Card Number"
                          handleInputData={setCardNumber}
                        />
                      </Col>

                      <Col xs={24} lg={12} className="mt-8">
                        <Row gutter={{ xs: 12, lg: 40 }}>
                          <Col xs={12}>
                            <GInput
                              image={inputCard}
                              imageOnFocus={inputCardDark}
                              name="expiry"
                              placeholder="Expiry Date"
                              handleInputData={setExpiry}
                            />
                          </Col>
                          <Col xs={12}>
                            <GInput
                              image={inputCard}
                              imageOnFocus={inputCardDark}
                              name="cvv"
                              placeholder="CVV"
                              handleInputData={setCvv}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  )}

                  {eTransferActive && (
                    <Row gutter={{ xs: 0, lg: 40 }} className="mt-10">
                      <Col xs={24} lg={12}>
                        <div>
                          <p
                            className={`${inter.variable} font-inter text-base lg:text-xl text-[#1E1E1E] font-semibold`}
                          >
                            Please send your e-transfer to payment@ayocpa.ca
                          </p>
                          <p
                            className={`${inter.variable} font-inter text-xs lg:text-sm text-[#6E6E6E] mt-2 mb-4 lg:mb-8 `}
                          >
                            After sending your e-transfer, click complete
                            payment to notify us of the payment
                          </p>
                        </div>
                      </Col>
                    </Row>
                  )}
                  {chequeActive && (
                    <Row gutter={{ xs: 0, lg: 40 }} className="mt-10">
                      <Col xs={24} lg={12}>
                        <div>
                          <p
                            className={`${inter.variable} font-inter text-base lg:text-xl text-[#1E1E1E] font-semibold`}
                          >
                            Please make your cheque payable to “Ayo & Company
                            CPA”, PO Box 540 Stn Main, Cold Lake, Alberta T9M
                            1P2
                          </p>
                          <p
                            className={`${inter.variable} font-inter text-xs lg:text-sm text-[#6E6E6E] mt-2 mb-4 lg:mb-8 `}
                          >
                            After sending your cheque, click complete payment to
                            notify us of the payment
                          </p>
                        </div>
                      </Col>
                    </Row>
                  )}
                </section>

                <div className="mt-12">
                  <AuthButton text="Complete Payment" active={buttonActive} />
                </div>
              </form>
            </Col>
          </Row>
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

export default MakePaymentAsGuest;
