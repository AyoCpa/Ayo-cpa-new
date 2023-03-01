import Navbar from "@/components/Nav/Navbar";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrowLeft from "@/public/ASSETS/ICONS/arrow-left.svg";
import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import input_email from "@/public/ASSETS/ICONS/email-input.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import { useRouter } from "next/router";
import Copyright from "@/components/Nuggets/Copyright";
import Warning from "@/components/Messages/Warning";
import inputEmailDark from "@/public/ASSETS/ICONS/email-input-dark.svg";
import ValidateEmail from "@/utils/email-validate";

function ForgotPassword() {
  const router = useRouter();
  const [email, setEmailAddress] = useState("");
  const [submitActive, setSubmitActive] = useState(false);

  useEffect(() => {
    if (ValidateEmail(email)) {
      setSubmitActive(true);
      return
    }
    setSubmitActive(false)
  }, [email]);
  return (
    <>
      <div>
        <Navbar authScreen={true} />
      </div>
      <OverallAuthWrapper>
        <>
          <AuthWrapper>
            <>
              <Warning />
              <div
                className="mb-4 mt-8 cursor-pointer"
                onClick={() => {
                  router.push("/auth/sign-in");
                }}
              >
                <Image src={arrowLeft} alt="arrow_left" />
              </div>
              <section>
                <AuthPageHeader
                  header="Forgot your password ?"
                  subHeader="To reset your password, please enter the email you registered with. A unique code will be emailed to your address, which will let you reset your password."
                />
              </section>

              <div className="mt-8">
                <form action="">
                  <div className="mb-4">
                    <GInput
                      imageOnFocus={inputEmailDark}
                      image={input_email}
                      name="email"
                      placeholder="Email Address"
                      handleInputData={setEmailAddress}
                    />
                  </div>

                  <div className="mb-8">
                    <AuthButton
                      text="Send"
                      active={submitActive ? true : false}
                    />
                  </div>
                </form>
              </div>
            </>
          </AuthWrapper>
          <div>
            <Copyright />
          </div>
        </>
      </OverallAuthWrapper>
    </>
  );
}

export default ForgotPassword;
