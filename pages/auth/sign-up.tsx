import React from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Nav/Navbar";
import Cancel from "@/components/Nuggets/Cancel";
import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";

function SignUp() {
  const handleSignUp = () => {
   
  }
  return (
    <>
      <div>
        <Navbar authScreen={true} />
      </div>
      <div className={styles.signUpBanner}>
        <div className="bg-[#EFEFEF] min-h-[300px] w-[500px] mx-auto relative px-10 pt-12">
          <Cancel />
          <section>
            <AuthPageHeader header="Create an account" subHeader="Register as a new Client" />
          </section>

          <form action="" onSubmit={handleSignUp}>
            <GInput />

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
