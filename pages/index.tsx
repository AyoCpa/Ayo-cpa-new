import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Nav/Navbar";
import { ubuntu, inter } from "@/utils/fonts";
import { ButtonWithIcon } from "@/components/Buttons/ActionButton";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { Row, Col } from "antd";
import { ServicesObject } from "@/utils/ServicesObject";
import { countLetters } from "@/utils/countLetters";
import logoFull from "@/public/ASSETS/LOGOS/logo-full.svg";
import line from "@/public/ASSETS/ICONS/line.svg";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ayo & Company | Chartered Accounting Company</title>
        <meta name="description" content="Ayo & Company is a chartered professional accounting company in Canada that specializes in taxation, payroll, bookkeping and general accounting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="accounting companies in canada, bookkeeping, general accounting, taxation, payroll, Canada business advisory, retirement accounting, estate finance planning, accounting in canada" />
        <meta property="og:title" content="Ayo & Company | Chartered Accounting Company" />
        <meta
          property="og:description"
          content="Ayo & Company is a chartered professional accounting company in Canada that specializes in taxation, payroll, bookkeping and general accounting."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/infarena-6aa80.appspot.com/o/home-page-banner.jpg?alt=media&token=6e94381c-15eb-4060-8d93-5c0e6b55bbc6&_gl=1*rci7nu*_ga*MTMzNzA5NDM0Mi4xNjg4NDA5MjQy*_ga_CW55HF8NVT*MTY5NjE3NDcyOS42LjEuMTY5NjE3NDg1Ny42MC4wLjA."
        />
        <meta property="og:type" content="website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navbar />

      {/* Banner */}
      <div className="h-screen relative">
        <div className={styles.bannerImage}>
          <FixedArrowUp />

          <div className=" w-4/5 lg:w-1/2  mx-auto text-white">
            <div
              className={`${ubuntu.variable} font-medium text-2xl  font-ubuntu text-center lg:text-5xl lg:leading-tight `}
            >
              Where Every Number Tells Your Story
            </div>
            <div
              className={`${inter.variable} font-inter text-base lg:text-xl text-center mt-5 w-full lg:w-4/5  m-auto`}
            >
              At Ayo CPA, we see beyond the numbers. Experience personalized
              accounting services tailored to your unique goals, powered by the
              latest technology.
            </div>

            <div className="mt-10 ">
              <ButtonWithIcon text="Read more" url="/about" />
            </div>
          </div>
        </div>
      </div>

      <HireFlash />

      <div className="py-16 bg-[#efefef]">
        <div
          className={`text-center ${ubuntu.variable} font-bold font-ubuntu text-xl lg:text-3xl mb-10`}
        >
          Services
        </div>

        <Row justify="center">
          <Col xs={22} lg={20}>
            <Row
              gutter={{ xs: 0, lg: 40 }}
              className="flex justify-center lg:justify-start"
            >
              {ServicesObject.map((item, index, root) => {
                return (
                  <Col xs={22} lg={8} key={index} className={`mb-20`}>
                    <div className="lg:text-left text-center lg:block flex justify-center">
                      <Image src={item.image} alt="calculator-image" />
                    </div>

                    <div
                      className={`${ubuntu.variable} font-bold text-center lg:text-left font-ubuntu  text-lg lg:text-xl py-4`}
                    >
                      {item.name}
                    </div>

                    <div
                      className={`${inter.variable} text-[#1E1E1E] font-normal text-center lg:text-left font-inter lg:text-lg text-xs`}
                    >
                      {countLetters(item.details, 150)}
                    </div>
                  </Col>
                );
              })}

              <Col xs={24}>
                <ButtonWithIcon
                  text="All services"
                  dark={true}
                  url="/service"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Row className="bg-[#1A1229]  flex lg:justify-end justify-center">
        <Col xs={24} lg={22}>
          <Row className="flex justify-center lg:justify-start">
            <Col xs={22} lg={11} className="text-white py-16 ">
              <div
                className={`${ubuntu.variable} font-ubuntu font-bold lg:text-3xl w-full lg:w-2/3 lg:leading-normal text-xl `}
              >
                We&apos;re more than just an accounting firm, we want to help
                improve your businesses
              </div>

              <div
                className={`${inter.variable} font-inter text-sm lg:text-lg w-full lg:w-2/3 mt-10 `}
              >
                Ayo & Company Chartered Professional Accountant, our team of
                accountants and technicians provide services to a wide variety
                of clients and industries
              </div>
            </Col>

            <Col xs={24} lg={13} className="bg-white">
              <div className="w-3/5 mx-auto py-16 lg:py-0 flex flex-col h-full items-center justify-center">
                <div>
                  <Image src={logoFull} alt="Logo Full" />
                </div>
                <div className="py-10">
                  <Image src={line} alt="line" />
                </div>
                <div>
                  <Image src={logoFull} alt="Logo Full" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <ServiceFlash />

      {/* <div className={styles.flashDetails}>
        <div
          className={`text-xl lg:text-5xl w-full lg:w-1/2 mx-auto text-center lg:leading-snug ${ubuntu.variable} font-ubuntu`}
        >
          Ayo234 is our bookkeeping tool, it helps track financial records and
          manage cash flow for your businesses.
        </div>

        <div className="mt-10">
          <ButtonWithIcon text="Try it now" dark={true} url="" />
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
