import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import Navbar from "@/components/Nav/Navbar";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import Cancel from "@/components/Nuggets/Cancel";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import React, { useState, useEffect } from "react";
import input_email from "@/public/ASSETS/ICONS/email-input.svg";
import password_lock from "@/public/ASSETS/ICONS/password-lock.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import inputEmailDark from "@/public/ASSETS/ICONS/email-input-dark.svg";
import passwordLockDark from "@/public/ASSETS/ICONS/password-lock-dark.svg";
import ValidateEmail from "@/utils/email-validate";

function RegistrationComplete() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (
      ValidateEmail(emailAddress) &&
      password.length > 6 &&
      password === cPassword
    ) {
      setButtonActive(true);
      return;
    }
    setButtonActive(false);
  }, [emailAddress, password, cPassword]);

  return (
    <div>
      <div>
        <Navbar authScreen={true} />
      </div>

      <OverallAuthWrapper>
        <>
          <AuthWrapper>
            <>
              <Cancel />
              <section>
                <AuthPageHeader
                  header="Complete registration"
                  subHeader="Upon account creation approval by the firm, the below will be your login details"
                />
              </section>

              <div className="mt-8">
                <form action="">
                  <div className="mb-4">
                    <GInput
                      image={input_email}
                      imageOnFocus={inputEmailDark}
                      placeholder="example@example.com"
                      name="email_address"
                      handleInputData={setEmailAddress}
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      image={password_lock}
                      placeholder="Set Password"
                      name="password"
                      imageOnFocus={passwordLockDark}
                      passwordType={true}
                      handleInputData={setPassword}
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      imageOnFocus={passwordLockDark}
                      image={password_lock}
                      placeholder="Confirm Password"
                      name="cPassword"
                      passwordType={true}
                      handleInputData={setCPassword}
                    />
                  </div>

                  <div className="mb-8">
                    <AuthButton
                      text="Complete"
                      active={buttonActive ? true : false}
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
    </div>
  );
}

export default RegistrationComplete;
