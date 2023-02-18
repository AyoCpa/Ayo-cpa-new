import Navbar from "@/components/Nav/Navbar";
import React from "react";
import styles from "@/styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import {Row , Col} from "antd"
import { ubuntu, inter , ubuntuLight } from "@/utils/fonts";

function service() {
  return (
    <>
      <div>
        <Navbar />
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

      <section className="bg-[#e5e5e5]">
        <Row justify="center">
          <Col xs={16}>
            <div className="flex items-center">
              <div>
                <span
                  className={`${ubuntuLight.variable} font-ubuntu-light text-[#1E1E1E]  text-[300px] `}
                >
                  1
                </span>
              </div>
              <div>
                <p>Accounting Service</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime repudiandae dolore nesciunt alias velit nisi error
                  dicta doloremque optio at iste, exercitationem nam deleniti
                  aspernatur quisquam provident hic illo dolor.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default service;
