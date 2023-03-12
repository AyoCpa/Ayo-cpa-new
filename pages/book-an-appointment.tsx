import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";
import { PagesSubHeader } from "@/components/Nuggets/PagesSubHeader";
import { PageSideSubHeader } from "@/components/Nuggets/PageSideSubHeader";
import {Row , Col} from "antd"

function BookAnAppointment() {
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
          <SideBannerContent mainText="Book an appointment with us" currentPage="Book an appointment" />
        </div>
      </section>

      <div className="bg-[#efefef]">
        <section>
            <PageSideSubHeader mainText="Book an appointment" subText="Request for our professional services" />
        </section>

        <section>
          <Row justify="center">
            <Col xs={22} lg={16} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sint quasi ab aliquid minima, ad, temporibus tempora, labore sit quod incidunt illum beatae voluptatibus corrupti nesciunt autem? Velit, earum deserunt?
            </Col>
          </Row>
        </section>

      </div>
    </>
  );
}

export default BookAnAppointment;
