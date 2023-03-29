import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { PageSideSubHeader } from "@/components/Nuggets/PageSideSubHeader";
import { Row, Col } from "antd";
import { SectionHeader } from "@/components/Nuggets/SectionHeader";
import { inter } from "@/utils/fonts";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { HireFlash } from "@/components/PageFlash/HireFlash";
import { ServiceFlash } from "@/components/PageFlash/ServiceFlash";
import { Footer } from "@/components/Footer/Footer";

function SubmitFileAsClient() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <FixedArrowUp />
      </section>
      <section className={styles.submitDocCol}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Submit Document"
            currentPage="Submit Document"
          />
        </div>
      </section>

      <div className="bg-[#efefef]">
        <section>
          <PageSideSubHeader
            mainText="Send your documents"
            subText="We will process them for you"
          />
        </section>

        <section>
          <Row justify="center">
            <Col xs={22} lg={16}>
              <Row>
                <Col xs={24}>
                  <section className="mt-20">
                    <SectionHeader text="Upload Files" />
                  </section>
                </Col>
                <Col xs={24}>
                  <Row>
                    <Col xs={24} lg={12}>
                      <div className="w-full border-2 border-[#c4c4c4] flex justify-center items-center h-[150px]">
                        <div className="relative">
                          <input
                            type="file"
                            className="text-center bg-tranparent py-2 absolute opacity-0"
                            placeholder="Add files"
                          />
                          <span
                            className={`text-[#1A1229] ${inter.variable} p-2 font-inter border-2 border-[#1A1229] font-bold`}
                          >
                            Add files
                          </span>
                        </div>
                      </div>
                      <div className="mt-12">
                        <textarea
                          className="bg-transparent p-2 border-2 w-full border-[#c4c4c4]"
                          name=""
                          id=""
                          cols={30}
                          rows={10}
                          placeholder="Brief description"
                        ></textarea>
                      </div>
                      <div>
                        <AuthButton text="Submit" active={false} />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident similique voluptas magnam adipisci culpa odit corrupti totam mollitia assumenda sed, quia repellendus sequi modi facilis ipsa voluptatibus non exercitationem dolore. */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section className="mt-20">
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

export default SubmitFileAsClient;
