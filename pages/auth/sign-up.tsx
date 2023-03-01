import React, { useState } from "react";
import Navbar from "@/components/Nav/Navbar";
import Cancel from "@/components/Nuggets/Cancel";
import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import inputProfile from "../../public/ASSETS/ICONS/profile-input.svg";
import inputEmail from "../../public/ASSETS/ICONS/email-input.svg";
import telephone from "@/public/ASSETS/ICONS/telephone.svg";
import location from "@/public/ASSETS/ICONS/input-location.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import Error from "@/components/Messages/Error";

function SignUp() {
  const [error, setError] = useState(true);
  const handleSignUp = () => {};
  return (
    <>
      <div>
        <Navbar authScreen={true} />
      </div>
      <OverallAuthWrapper>
        <>
          <AuthWrapper>
            <>
              {error && (
                <Error
                  message="Incorrect Login details"
                  handleClose={setError}
                />
              )}

              {!error && <Cancel />}

              <section>
                <AuthPageHeader
                  header="Create an account"
                  subHeader="Register as a new Client"
                />
              </section>

              <div className="mt-8">
                <form action="" onSubmit={handleSignUp}>
                  <div className="mb-4">
                    <GInput
                      image={inputProfile}
                      placeholder="Full Name"
                      name="full_name"
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      image={inputEmail}
                      placeholder="Email Address"
                      name="email_address"
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      image={telephone}
                      placeholder="Telephone"
                      name="phone_number"
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      image={location}
                      placeholder="Address"
                      name="address"
                    />
                  </div>

                  <div className="mb-8">
                    <AuthButton text="Continue" active={false} />
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

export default SignUp;
