import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { PageSideSubHeader } from "@/components/Nuggets/PageSideSubHeader";
import { Row, Col } from "antd";
import { SectionHeader } from "@/components/Nuggets/SectionHeader";
import GInput from "@/components/Inputs/GInput";
import inputProfileDark from "@/public/ASSETS/ICONS/profile-input-dark.svg";
import inputProfile from "@/public/ASSETS/ICONS/profile-input.svg";
import telephone from "@/public/ASSETS/ICONS/telephone.svg";
import telephoneDark from "@/public/ASSETS/ICONS/telephone-dark.svg";
import inputEmailDark from "@/public/ASSETS/ICONS/email-input-dark.svg";
import inputEmail from "@/public/ASSETS/ICONS/email-input.svg";
import locationDark from "@/public/ASSETS/ICONS/location-dark.svg";
import location from "@/public/ASSETS/ICONS/input-location.svg";
import date_black from "@/public/ASSETS/ICONS/date_black.svg";
import date_image from "@/public/ASSETS/ICONS/date_image.svg";
import time_plain from "@/public/ASSETS/ICONS/time-plain.svg";
import time_dark from "@/public/ASSETS/ICONS/time-dark.svg";
import appointment from "@/public/ASSETS/ICONS/appointment.svg";
import appointment_black from "@/public/ASSETS/ICONS/appointment-black.svg";
import { inter } from "@/utils/fonts";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { Footer } from "@/components/Footer/Footer";

function BookAnAppointment() {
  const [phone_number, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentLocation, setAppointmentLocation] = useState("");
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <FixedArrowUp />
      </section>

      <section className={styles.bookAppointmentCol}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Book an appointment with us"
            currentPage="Book an appointment"
          />
        </div>
      </section>

      <div className="bg-[#efefef]">
        <section>
          <PageSideSubHeader
            mainText="Book an appointment"
            subText="Request for our professional services"
          />
        </section>

        <section>
          <Row justify="center">
            <Col xs={22} lg={16}>
              <form action="">
                <section className="mt-20">
                  <SectionHeader text="User information" />
                </section>
                <Row gutter={{ xs: 0, lg: 40 }} className="mb-12 pb-12">
                  <Col xs={24} lg={12}>
                    <GInput
                      imageOnFocus={inputProfileDark}
                      image={inputProfile}
                      placeholder="Name"
                      name="name"
                      handleInputData={setName}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <GInput
                      imageOnFocus={telephoneDark}
                      image={telephone}
                      placeholder="Telephone"
                      name="telephone"
                      handleInputData={setPhoneNumber}
                    />
                  </Col>
                  <Col xs={24} lg={12} className="lg:pt-4">
                    <GInput
                      imageOnFocus={inputEmailDark}
                      image={inputEmail}
                      placeholder="Email Address"
                      name="email"
                      handleInputData={setEmail}
                    />
                  </Col>
                  <Col xs={24} lg={12} className="lg:pt-4">
                    <GInput
                      imageOnFocus={locationDark}
                      image={location}
                      placeholder="Address"
                      name="Address"
                      handleInputData={setPhoneNumber}
                    />
                  </Col>

                  <Col lg={24} className="pt-4">
                    <section className="mt-12">
                      <SectionHeader text="Appointment Details" />
                    </section>
                  </Col>

                  <Col xs={24} lg={12}>
                    <GInput
                      imageOnFocus={date_black}
                      image={date_image}
                      placeholder="Pick a date"
                      name="date"
                      handleInputData={setDate}
                    />
                  </Col>
                  <Col xs={24} lg={12}>
                    <GInput
                      imageOnFocus={time_dark}
                      image={time_plain}
                      placeholder="Choose preferred time"
                      name="appointmentTime"
                      handleInputData={setAppointmentTime}
                    />
                  </Col>
                  <Col xs={24} lg={12} className="lg:pt-4">
                    <GInput
                      imageOnFocus={appointment_black}
                      image={appointment}
                      placeholder="Choose appointment location"
                      name="appointmentLocation"
                      handleInputData={setAppointmentLocation}
                    />
                  </Col>
                  <Col xs={24}>
                    <Row gutter={{ xs: 0, lg: 40 }}>
                      <Col xs={24} lg={12}>
                        <div className={`${inter.variable} font-inter lg:mt-4`}>
                          <textarea
                            style={{
                              border: "2px solid #aaa",
                            }}
                            className="w-full bg-transparent p-4"
                            name=""
                            id=""
                            cols={30}
                            placeholder="Brief description"
                            rows={10}
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={24}>
                    <AuthButton text="Book Appointment" active={false} />
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </section>
      </div>

      <div >
        <HireFlash /> 
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default BookAnAppointment;
