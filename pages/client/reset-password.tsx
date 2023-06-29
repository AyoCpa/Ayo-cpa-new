import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import PortalNavbar from "@/components/Nav/PortalNavbar";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import React from "react";
import password_lock from "@/public/ASSETS/ICONS/password-lock.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import Warning from "@/components/Messages/Warning";
import passwordLockDark from "@/public/ASSETS/ICONS/password-lock-dark.svg";
import { useState, useEffect } from "react";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [buttonActive , setButtonActive] = useState(false)

  useEffect(() => {
    if(password.length > 6 && password === cPassword){
      setButtonActive(true)
      return;
    }
    setButtonActive(false)
  }, [password , cPassword]);

  return (
    <>
      <div>
      <PortalNavbar authScreen={true} />
      </div>
      <OverallAuthWrapper portalWrapper={true}>
        <>
          <AuthWrapper>
            <>
              <Warning />
              <section className="mt-8">
                <AuthPageHeader
                  header="Reset Password"
                  subHeader="Create a new password"
                />
              </section>

              <div className="mt-8">
                <form action="">
                  <div className="mb-4">
                    <GInput
                      image={password_lock}
                      name="password"
                      placeholder="New Password"
                      imageOnFocus={passwordLockDark}
                      handleInputData={setPassword}
                      passwordType={true}
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      image={password_lock}
                      name="c_password"
                      placeholder="Confirm Password"
                      imageOnFocus={passwordLockDark}
                      handleInputData={setCPassword}
                      passwordType={true}
                    />
                  </div>
                  <div className="mb-8">
                    <AuthButton active={buttonActive ? true : false} text="Reset" />
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

export default ResetPassword;
