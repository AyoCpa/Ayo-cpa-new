import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { PageSideSubHeader } from "@/components/Nuggets/PageSideSubHeader";
import { SectionHeader } from "@/components/Nuggets/SectionHeader";
import { Row, Col } from "antd";
import GInput from "@/components/Inputs/GInput";
import inputProfileDark from "@/public/ASSETS/ICONS/profile-input-dark.svg";
import inputProfile from "@/public/ASSETS/ICONS/profile-input.svg";
import telephone from "@/public/ASSETS/ICONS/telephone.svg";
import telephoneDark from "@/public/ASSETS/ICONS/telephone-dark.svg";
import locationDark from "@/public/ASSETS/ICONS/location-dark.svg";
import location from "@/public/ASSETS/ICONS/input-location.svg";
import inputEmailDark from "@/public/ASSETS/ICONS/email-input-dark.svg";
import inputEmail from "@/public/ASSETS/ICONS/email-input.svg";
import { inter } from "@/utils/fonts";
import { AuthButton } from "@/components/Buttons/AuthButton";
import email_big from "@/public/ASSETS/ICONS/email_big.svg";
import phone_big from "@/public/ASSETS/ICONS/phone_big.svg";
import video_big from "@/public/ASSETS/ICONS/video_call.svg";
import Image from "next/image";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import axios from "axios";
import ValidateEmail from "@/utils/email-validate";

function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const communicationData = [
    { image: email_big, text: "Email us", contact: "info@ayocpa.ca" },
    { image: phone_big, text: "Call us", contact: "+7805944441" },
    {
      image: video_big,
      text: "Chat or Video call us",
      contact: "Login/register to access this feature",
    },
  ];

  useEffect(() => {
    if (
      name &&
      phoneNumber &&
      address &&
      emailAddress &&
      ValidateEmail(emailAddress) &&
      comment
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [name, phoneNumber, address, emailAddress, comment]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonActive(false);
    axios
      .post("/api/send-email", {
        name,
        phone: phoneNumber,
        address,
        email: emailAddress,
        comment,
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((e) => {
        setFailed(true);
      })
      .finally(() => {
        setButtonActive(true);
      });
  };

  return (
    <>
      <div>
        <Navbar currentPage="contact" />
      </div>
      <div>
        <FixedArrowUp />
      </div>

      <section className={styles.contactCol}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent mainText="Contact us" currentPage="Contact us" />
        </div>
      </section>
      <div className="bg-[#efefef]">
        <section>
          <PageSideSubHeader
            mainText="Get in touch with us"
            subText="Send us all and any enquiries"
          />
        </section>

        <section>
          <Row justify="center">
            <Col xs={22} lg={16}>
              <Row>
                <Col xs={24}>
                  <section className="mt-20">
                    <SectionHeader text="User information" />
                  </section>
                </Col>
                <Col lg={12} xs={24}>
                  <form action="" onSubmit={sendEmail}>
                    <div className="mb-4">
                      <GInput
                        imageOnFocus={inputProfileDark}
                        image={inputProfile}
                        placeholder="Full Name"
                        name="Name"
                        handleInputData={setName}
                      />
                    </div>
                    <div className="mb-4">
                      <GInput
                        imageOnFocus={telephoneDark}
                        image={telephone}
                        placeholder="Telephone"
                        name="telephone"
                        handleInputData={setPhoneNumber}
                      />
                    </div>
                    <div className="mb-4">
                      <GInput
                        imageOnFocus={locationDark}
                        image={location}
                        placeholder="Address (optional)"
                        name="address"
                        handleInputData={setAddress}
                      />
                    </div>
                    <div className="mb-4">
                      <GInput
                        imageOnFocus={inputEmailDark}
                        image={inputEmail}
                        placeholder="Email Address"
                        name="email_address"
                        handleInputData={setEmailAddress}
                      />
                    </div>

                    <section className="mt-10">
                      <SectionHeader text="Message" />
                    </section>

                    <div>
                      <textarea
                        className={`w-full border-2 border-[#aaaaaa] bg-transparent ${inter.variable} font-inter p-2 placeholder:text-[#5A5A5A] `}
                        placeholder="Your message"
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      ></textarea>
                    </div>

                    <div className="mt-6 mb-10">
                      <AuthButton text="Send message" active={buttonActive} />
                    </div>

                    <div>
                      {success && (
                        <p
                          className={`${inter.variable} font-inter text-[green]`}
                        >
                          Thank you for reaching out. your message is received
                        </p>
                      )}

                      {failed && (
                        <p
                          className={`${inter.variable} font-inter text-[red]`}
                        >
                          Oops, an error occured trying to send message, Try
                          again!
                        </p>
                      )}
                    </div>
                  </form>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="flex flex-col items-center lg:items-end">
                    {communicationData.map((item, index, root) => {
                      return (
                        <div
                          key={index}
                          className="border-[#6fb1e3] w-[260px]  border text-center py-6 mb-4"
                        >
                          <div className="flex justify-center">
                            <Image src={item.image} alt="" />
                          </div>
                          <p
                            className={`${inter.variable} my-2 font-inter font-semibold text-2xl`}
                          >
                            {item.text}
                          </p>
                          <p
                            className={`${inter.variable} font-inter text-[#6E6E6E] text-sm`}
                          >
                            {index == 0 ? (
                              <a href="mailto:info@ayocpa.ca">{item.contact}</a>
                            ) : index == 1 ? (
                              <a href="tel:+7805944441">{item.contact}</a>
                            ) : (
                              item.contact
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section className="mt-10">
          <HireFlash />
        </section>
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

export default Contact;
