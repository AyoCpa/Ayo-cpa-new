import AuthPageHeader from "@/components/Headers/AuthPageHeader";
import GInput from "@/components/Inputs/GInput";
import Navbar from "@/components/Nav/Navbar";
import AuthWrapper from "@/components/Nuggets/AuthWrapper";
import Cancel from "@/components/Nuggets/Cancel";
import OverallAuthWrapper from "@/components/Nuggets/OverallAuthWrapper";
import React, { useState, useEffect } from "react";
import input_email from "@/public/ASSETS/ICONS/email-input.svg";
import input_lock from "@/public/ASSETS/ICONS/password-lock.svg";
import { inter } from "@/utils/fonts";
import { AuthButton } from "@/components/Buttons/AuthButton";
import Copyright from "@/components/Nuggets/Copyright";
import { useRouter } from "next/router";
import inputEmailDark from "@/public/ASSETS/ICONS/email-input-dark.svg";
import passwordLockDark from "@/public/ASSETS/ICONS/password-lock-dark.svg";
import ValidateEmail from "@/utils/email-validate";
import { apiClient } from "@/api";
import { toast } from "sonner";
import axios from "axios";

function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (ValidateEmail(email) && password.length > 6) {
      setButtonActive(true);
      return;
    }
    setButtonActive(false);
  }, [email, password]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonActive(false);
    apiClient("post", "/auth/login", { email, password })
      .then((res) => {
        console.log(res?.data);
        toast.success("Authenticated Successfully");
        localStorage.setItem("user-token", JSON.stringify(res?.data));
        router.push("/blog");
      })
      .catch((e) => {
        toast.error("Some errror occured");
        console.log(e);
      })
      .finally(() => {
        setButtonActive(true);
      });
  };

  return (
    <>
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
                  header="Welcome back "
                  subHeader="Login into your account"
                />
              </section>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <GInput
                      imageOnFocus={inputEmailDark}
                      image={input_email}
                      name="email"
                      placeholder="Email Address"
                      handleInputData={setEmail}
                    />
                  </div>
                  <div className="mb-4">
                    <GInput
                      imageOnFocus={passwordLockDark}
                      image={input_lock}
                      name="password"
                      placeholder="Password"
                      passwordType={true}
                      handleInputData={setPassword}
                    />
                    <div className="flex justify-end mt-3 mb-3">
                      <p
                        className={`${inter.variable} font-inter text-xs text-[#1A1229] cursor-pointer`}
                        onClick={() => {
                          router.push("/auth/forgot-password");
                        }}
                      >
                        Forgot your password?
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <AuthButton
                      text="Login "
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
    </>
  );
}

export default SignIn;
