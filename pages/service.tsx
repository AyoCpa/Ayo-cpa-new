import Navbar from "@/components/Nav/Navbar";
import React from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { Row, Col } from "antd";
import { ubuntu, inter, ubuntuLight } from "@/utils/fonts";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";

function Service() {
  return (
    <div style={{ border:'1px solid red' }}>
      <div>
        <Navbar />
      </div>

      <div>
        <FixedArrowUp />
      </div>

      <section className={styles.serviceBanner}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent mainText="Our Services" currentPage="Services" />
        </div>
      </section>

      <section className="bg-[#E5E5E5]">
        <PagesSubHeader
          larger={true}
          text="Providing the best professional financial services."
        />
      </section>

      <Row className="bg-[#e5e5e5] pt-20 pb-24 " justify={"end"}>
        <Col xs={24} className={styles.serviceCol}>
          <div className="flex lg:flex-row flex-col lg:items-center lg:w-4/5 lg:mx-auto">
            <div>
              <div
                className={`${ubuntuLight.variable}  font-ubuntu-light text-[#1E1E1E] text-[150px] lg:text-[300px] p-4 lg:p-0 `}
                style={{ lineHeight: "0" }}
              >
                1
              </div>
            </div>
            <div className="pt-20 p-4 lg:p-0 lg:ml-20">
              <p
                className={`${ubuntu.variable} text-xl lg:text-2xl font-ubuntu font-bold mb-2 lg:mb-10`}
              >
                Accounting Services
              </p>
              <div
                className={`text-[#1E1E1E] lg:w-4/5 ${inter.variable} font-inter text-xs lg:text-lg`}
              >
                Meaningful and well-organized financial records ensure that your
                business operations will run more efficiently and are
                fundamental for a successful business. To grow your business,
                you need accurate and timely financial information. <br />{" "}
                <br /> We know paperwork can be cumbersome to keep on and
                present further challenges and costs if not handled properly and
                on time, we offer full accounting services and can take the load
                off for you. <br /> <br /> Our firm provides a full range of
                accounting services, some of which are the following:
                <ul>
                  <li>• General ledger and financial statement preparation</li>
                  <li>• Compilation of financial statements</li>
                  <li>• Monthly/quarterly/annual bookkeeping services </li>
                  <li>• GST and PST filings</li>

                  <li>• Payroll services and T4 preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} className={styles.bookkeepingCol}>
          <div className="flex lg:flex-row flex-col lg:items-center lg:w-4/5 lg:mx-auto">
            <div>
              <div
                className={`${ubuntuLight.variable} font-ubuntu-light text-[#1E1E1E] text-[150px] lg:text-[300px] p-4 lg:p-0 mt-16 lg:mt-0 `}
                style={{ lineHeight: "0" }}
              >
                2
              </div>
            </div>
            <div className="pt-20 p-4 lg:p-0 lg:ml-20">
              <p
                className={`${ubuntu.variable} text-xl lg:text-2xl font-ubuntu font-bold mb-2 lg:mb-10`}
              >
                Bookkeeping and Payroll
              </p>
              <div
                className={`text-[#1E1E1E] lg:w-4/5 ${inter.variable} font-inter text-xs lg:text-lg`}
              >
                We provide services to take care of everything or assist in part
                of the record and bookkeeping of your business or organization.
                We provide regular reports from this record keeping that can
                help you do what you do best and manage your business while
                offloading the burden of bookkeeping. <br /> <br /> Trust us at
                Ayo & Company CPA we will competently handle accounts receivable
                and accounts payable, bank statement and credit card
                reconciliations, journal entries and more.
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} className={styles.taxationCol}>
          <div className="flex lg:flex-row flex-col lg:items-center lg:w-4/5 lg:mx-auto">
            <div>
              <div
                className={`${ubuntuLight.variable}  font-ubuntu-light text-[#1E1E1E] text-[150px] lg:text-[300px] p-4 lg:p-0 mt-16 lg:mt-0 `}
                style={{ lineHeight: "0" }}
              >
                3
              </div>
            </div>
            <div className="pt-20 p-4 lg:p-0 lg:ml-20">
              <p
                className={`${ubuntu.variable} text-xl lg:text-2xl font-ubuntu font-bold mb-2 lg:mb-10`}
              >
                Taxation
              </p>
              <div
                className={`text-[#1E1E1E] lg:w-4/5 ${inter.variable} font-inter text-xs lg:text-lg`}
              >
                We actively invests in advanced tax software to efficiently
                prepare your returns. Tax planning is of the utmost importance
                to be proactive with tax minimization and plan for changing
                legislation and regulations. Irrespective of your plans, be it
                minimization, succession, estate, or a business sale, we sit
                down with each client and take an individualized and specific
                tax strategy approach to ensure your specific situation and
                needs are understood and met when making taxation advice. <br />{" "}
                <br /> We are experts on tax legislation, which means we’re
                always able to help you identify opportunities to reduce your
                future tax liabilities, not just your current ones. We will be
                your tax advisor.
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} className={styles.retirementCol}>
          <div className="flex lg:flex-row flex-col lg:items-center lg:w-4/5 lg:mx-auto">
            <div>
              <div
                className={`${ubuntuLight.variable}  font-ubuntu-light text-[#1E1E1E] text-[150px] lg:text-[300px] p-4 lg:p-0 mt-16 lg:mt-0 `}
                style={{ lineHeight: "0" }}
              >
                4
              </div>
            </div>
            <div className="pt-20 p-4 lg:p-0 lg:ml-20">
              <p
                className={`${ubuntu.variable} text-xl lg:text-2xl font-ubuntu font-bold mb-2 lg:mb-10`}
              >
                Retirement and Estate Planning
              </p>
              <div
                className={`text-[#1E1E1E] lg:w-4/5 ${inter.variable} font-inter text-xs lg:text-lg`}
              >
                Every individual’s and family’s financial needs and the
                situation is different. We will help you plan how our retirement
                days will be funded, and we will also help you organize your
                business and/or personal dealings. <br /> <br /> A proper estate
                plan looks at minimizing the taxes and costs associated with the
                distribution of an estate while achieving your goals.
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} className={styles.agricCol}>
          <div className="flex lg:flex-row flex-col lg:items-center lg:w-4/5 lg:mx-auto">
            <div>
              <div
                className={`${ubuntuLight.variable}  font-ubuntu-light text-[#1E1E1E] text-[150px] lg:text-[300px] p-4 lg:p-0 mt-16 lg:mt-0 `}
                style={{ lineHeight: "0" }}
              >
                5
              </div>
            </div>
            <div className="pt-20 p-4 lg:p-0 lg:ml-20">
              <p
                className={`${ubuntu.variable} text-xl lg:text-2xl font-ubuntu font-bold mb-2 lg:mb-10`}
              >
                Agricultural Program Assistance
              </p>
              <div
                className={`text-[#1E1E1E] lg:w-4/5 ${inter.variable} font-inter text-xs lg:text-lg`}
              >
                Accounting for agriculture, farming, and local business is an
                area that requires expertise and a vast knowledge of the
                business sector. From small scale farming to large-scale
                operations, the management of financial affairs and access to
                available funding is crucial to keeping those agricultural
                ventures viable and profitable. <br /> <br /> We provide
                assistance and advisory on what program is best fit for our
                clients, either for expansion or other reasons.
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} className={styles.advisoryCol}>
          <div className="flex lg:flex-row flex-col lg:items-center lg:w-4/5 lg:mx-auto">
            <div>
              <div
                className={`${ubuntuLight.variable}  font-ubuntu-light text-[#1E1E1E] text-[150px] lg:text-[300px] p-4 lg:p-0 mt-16 lg:mt-0 `}
                style={{ lineHeight: "0" }}
              >
                6
              </div>
            </div>
            <div className="pt-20 p-4 lg:p-0 lg:ml-20">
              <p
                className={`${ubuntu.variable} text-xl lg:text-2xl font-ubuntu font-bold mb-2 lg:mb-10`}
              >
                Business Advisory
              </p>
              <div
                className={`text-[#1E1E1E] lg:w-4/5 ${inter.variable} font-inter text-xs lg:text-lg`}
              >
                Ayo & Company CPA will help you with a wide variety of
                activities, including developing risk management controls,
                planning growth strategies, incorporating a new company, or even
                winding down your business at the end of a successful career.{" "}
                <br /> <br /> We provide more than accounting services, we will
                be more than happy to advise you at every stage of your
                business.
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* <div>
        <HireFlash />
      </div> */}

      <div>
        <ServiceFlash />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Service;
