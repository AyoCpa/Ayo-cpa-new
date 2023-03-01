import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import Navbar from "@/components/Nav/Navbar";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import React from "react";
import password_lock from "@/public/ASSETS/ICONS/password-lock.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import Warning from "@/components/Messages/Warning";
import passwordLockDark from "@/public/ASSETS/ICONS/password-lock-dark.svg";


function ResetPassword() {
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
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      image={password_lock}
                      name="c_password"
                      placeholder="Confirm Password"
                      imageOnFocus={passwordLockDark}
                    />
                  </div>
                  <div className="mb-8">
                    <AuthButton active={false} text="Reset" />
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

export default ResetPassword;
