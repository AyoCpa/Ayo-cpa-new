import Navbar from "@/components/Nav/Navbar";
import FixedArrowUp from "@/components/Nuggets/FixedArrowUp";
import React from "react";
import styles from "../styles/Home.module.css";
import { SideBannerContent } from "@/components/Nuggets/SideBannerContent";

function TermsOfUser() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <FixedArrowUp />
      </section>

      <section className={styles.termsOfService}>
        <div className="text-white ml-10 mt-24">
          <SideBannerContent
            mainText="Terms of Use"
            currentPage="Terms of Use"
          />
        </div>
      </section>
    </div>
  );
}

export default TermsOfUser;
