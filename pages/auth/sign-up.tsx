import React, { useState, useEffect } from "react";
import Navbar from "@/components/Nav/Navbar";
import Cancel from "@/components/Nuggets/Cancel";
import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import inputProfile from "../../public/ASSETS/ICONS/profile-input.svg";
import inputProfileDark from "@/public/ASSETS/ICONS/profile-input-dark.svg";
import inputEmailDark from "@/public/ASSETS/ICONS/email-input-dark.svg";
import inputEmail from "../../public/ASSETS/ICONS/email-input.svg";
import telephone from "@/public/ASSETS/ICONS/telephone.svg";
import telephoneDark from "@/public/ASSETS/ICONS/telephone-dark.svg";
import locationDark from "@/public/ASSETS/ICONS/location-dark.svg";
import location from "@/public/ASSETS/ICONS/input-location.svg";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import Error from "@/components/Messages/Error";
import ValidateEmail from "@/utils/email-validate";
import axios from "axios";
import { Success } from "@/components/Messages/Success";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const [activateButton, setActivateButton] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActivateButton(false)

    const data = Object.fromEntries(new FormData(e.currentTarget));

    axios
      .post("/api/auth/create_user", data)
      .then((res) => {
        setUserCreated(true);
        // set a timer for five seconds to redirect to login
        setTimeout(() => {
          router.push("/");
        }, 5000);
      })
      .catch((e) => {
        setError(true);
        let message;
        if (e.response.status >= 400 && e.response.status < 500) {
          message = e.response.data.msg;
        } else {
          message = "An error occured, Try again";
        }

        setErrorMessage(message);
      }).finally(() => {
        setActivateButton(true)
      })
  };

  useEffect(() => {
    if (
      name.length > 3 &&
      emailAddress.length > 3 &&
      ValidateEmail(emailAddress) &&
      phone.length > 3 &&
      address.length > 3
    ) {
      setActivateButton(true);
    } else {
      setActivateButton(false);
    }
  }, [name, emailAddress, phone, address]);

  return (
    <>
      <div>
        <Navbar authScreen={true} />
      </div>
      {userCreated ? (
        <Success
          header_1="Thank You!"
          header_2="Your registration details has been sent"
          message="We will send you a confirmation mail once your registration has been approved or declined"
        />
      ) : (
        <OverallAuthWrapper>
          <>
            <AuthWrapper>
              <>
                {error && (
                  <Error message={errorMessage} handleClose={setError} />
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
                        imageOnFocus={inputProfileDark}
                        image={inputProfile}
                        placeholder="Full Name"
                        name="name"
                        handleInputData={setName}
                      />
                    </div>
                    <div className="mb-4">
                      <GInput
                        imageOnFocus={inputEmailDark}
                        image={inputEmail}
                        placeholder="Email Address"
                        name="email_address"
                        handleInputData={setEmailAddress}
                      />
                    </div>
                    <div className="mb-4">
                      <GInput
                        imageOnFocus={telephoneDark}
                        image={telephone}
                        placeholder="Telephone"
                        name="phone_number"
                        handleInputData={setPhone}
                      />
                    </div>
                    <div className="mb-4">
                      <GInput
                        imageOnFocus={locationDark}
                        image={location}
                        placeholder="Address"
                        name="address"
                        handleInputData={setAddress}
                      />
                    </div>

                    <div className="mb-8">
                      <AuthButton
                        text="Continue"
                        active={activateButton ? true : false}
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
      )}
    </>
  );
}

export default SignUp;
