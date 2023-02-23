import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";

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
    </>
  );
}

export default MakePaymentAsGuest;
