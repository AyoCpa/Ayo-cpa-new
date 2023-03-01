import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import Navbar from "@/components/Nav/Navbar";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import Cancel from "@/components/Nuggets/Cancel";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import React from "react";
import input_email from "@/public/ASSETS/ICONS/email-input.svg";
import password_lock from "@/public/ASSETS/ICONS/password-lock.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import inputEmailDark from "@/public/ASSETS/ICONS/email-input-dark.svg";
import passwordLockDark from "@/public/ASSETS/ICONS/password-lock-dark.svg";

function RegistrationComplete() {
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
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      image={password_lock}
                      placeholder="Set Password"
                      name="password"
                      imageOnFocus={passwordLockDark}
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      imageOnFocus={passwordLockDark}
                      image={password_lock}
                      placeholder="Confirm Password"
                      name="cPassword"
                    />
                  </div>

                  <div className="mb-8">
                    <AuthButton text="Complete" active={false} />
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
