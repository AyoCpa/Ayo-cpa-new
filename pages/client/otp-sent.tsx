import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import PortalNavbar from "@/components/Nav/PortalNavbar";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import React from "react";
import password_lock from "@/public/ASSETS/ICONS/password-lock.svg";
import { inter } from "@/utils/fonts";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import passwordLockDark from "@/public/ASSETS/ICONS/password-lock-dark.svg";
import { useEffect, useState } from "react";

function OtpSent() {
  const [otp, setOtp] = useState("");
  const [submitButtonActive, setSubmitButtonActive] = useState(false);
  useEffect(() => {
    if (otp.length === 6) {
      setSubmitButtonActive(true);
      return;
    }
    setSubmitButtonActive(false);
  }, [otp]);

  return (
    <>
      <div>
        <PortalNavbar authScreen={true} />
      </div>

      <OverallAuthWrapper portalWrapper={true}>
        <>
          <AuthWrapper>
            <>
              <section>
                <AuthPageHeader
                  header="Enter code"
                  subHeader="Enter the unique code sent to your email address"
                />
              </section>

              <div className="mt-8">
                <form action="">
                  <div className="mb-4">
                    <GInput
                      imageOnFocus={passwordLockDark}
                      image={password_lock}
                      name="code"
                      placeholder="Code"
                      handleInputData={setOtp}
                    />
                    <div>
                      <p
                        className={`${inter.variable} font-inter text-xs text-[#1A1229] mt-3 mb-3 cursor-pointer`}
                      >
                        Resend code
                      </p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <AuthButton
                      active={submitButtonActive ? true : false}
                      text="Next"
                    />
                  </div>
                </form>
              </div>
            </>
          </AuthWrapper>
          <div>
            <Copyright portalCopyright={true} />
          </div>
        </>
      </OverallAuthWrapper>
    </>
  );
}

export default OtpSent;
