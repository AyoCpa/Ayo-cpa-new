import logo from "@/public/ASSETS/LOGOS/logo.svg";
import { inter } from "@/utils/fonts";
import Image from "next/image";
import textArrowDown from "../../public/ASSETS/ICONS/text-arrow-down.svg";
import user from "@/public/ASSETS/ICONS/user_icon.svg";
import { useEffect, useState } from "react";
import { ButtonWithNoIcon } from "../Buttons/ActionButton";
import logoColored from "@/public/ASSETS/LOGOS/logo-colored.svg";
import userDark from "@/public/ASSETS/ICONS/user-dark.svg";
import hamburgerWhite from "@/public/ASSETS/ICONS/hamburger-white.svg";
import hamburgerBlack from "@/public/ASSETS/ICONS/hamburger-black.svg";
import underline from "@/public/ASSETS/ICONS/underline.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { RootState } from "@/redux/store";
import { showMobileNav } from "@/redux/reducers/mobileNavReducer";

type NavBarProps = {
  authScreen?: boolean;
  currentPage?: string;
};

const Navbar = ({ authScreen = false, currentPage }: NavBarProps) => {
  const [showAuthDetails, setShowAuthDetails] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;
  const [scrollPos, setScrollPos] = useState(0);
  const [showMoreAction, setShowMoreAction] = useState(false);
  const { mobileNavActive } = useSelector(
    (state: RootState) => state.mobileNavReducer
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      {mobileNavActive && <MobileNav />}

      <div
        className={`${
          inter.variable
        } font-inter font-medium  fixed top-0 w-full z-10 flex flex-row justify-between ${
          scrollPos > 10
            ? "bg-white"
            : authScreen
            ? "bg-[#1a1229cc]"
            : "bg-transparent"
        } ${!authScreen ? "px-4 lg:px-12" : " px-4 lg:px-40"}  py-4 text-white items-center`}
      >
        <div className="">
          <Image
            src={scrollPos > 10 ? logoColored : logo}
            alt="ayocpa's logo"
            className="w-[200px] lg:w-full"
          />
        </div>
        {!authScreen && (
          <div
            className={`xl:flex hidden flex-row justify-between w-1/2 items-center ${
              scrollPos > 10 ? "text-[#1A1229]" : "text-[#EFEFEF]"
            }`}
          >
            <div
              className={`cursor-pointer ${
                currentPage == "about" && "mt-3"
              }  relative flex justify-center flex-col items-center`}
              onClick={() => {
                router.push("/about");
              }}
            >
              <p>About</p>
              {currentPage == "about" && (
                <span className="flex justify-center">
                  <Image
                    src={underline}
                    style={{ width: "50px", paddingTop: "8px" }}
                    alt="underline"
                  />
                </span>
              )}
            </div>

            <div
              className={`cursor-pointer ${
                currentPage == "services" && "mt-3"
              }  relative flex justify-center flex-col items-center`}
              onClick={() => router.push("/service")}
            >
              <p>Services</p>
              {currentPage == "services" && (
                <span className="flex justify-center">
                  <Image
                    src={underline}
                    style={{ width: "64px", paddingTop: "8px" }}
                    alt="underline"
                  />
                </span>
              )}
            </div>
            <div
              className={`cursor-pointer ${
                currentPage == "resources" && "mt-3"
              }  relative flex justify-center flex-col items-center`}
              onClick={() => router.push("/resource")}
            >
              <p>Resources</p>
              {currentPage == "resources" && (
                <span className="flex justify-center">
                  <Image
                    src={underline}
                    style={{ width: "72px", paddingTop: "8px" }}
                    alt="underline"
                  />
                </span>
              )}
            </div>
            <div
              className={`cursor-pointer ${
                currentPage == "taxes" && "mt-3"
              }  relative flex justify-center flex-col items-center`}
              onClick={() => router.push("/file-my-taxes")}
            >
              <p>File My Taxes</p>
              {currentPage == "taxes" && (
                <span className="flex justify-center">
                  <Image
                    src={underline}
                    style={{ width: "72px", paddingTop: "8px" }}
                    alt="underline"
                  />
                </span>
              )}
            </div>

            <span className="flex flex-row items-center cursor-pointer relative ">
              <span
                onClick={() => {
                  setShowMoreAction((prev) => !prev);
                }}
                className="flex items-center"
              >
                <span>More Actions</span>

                <span className="pl-2">
                  <Image src={textArrowDown} alt="text-arrow-down" />
                </span>
              </span>

              {showMoreAction && (
                <div
                  className={`absolute top-10 right-10 bg-white  min-w-[180px] px-3 py-3 text-[#1E1E1E] rounded-md ${inter.variable} font-inter font-semibold `}
                >
                  <p className="text-sm pt-1">
                    <Link href="/submit-document">Submit Document</Link>
                  </p>
                  <p className="text-sm pt-1">
                    <Link href="/book-an-appointment">Book an appointment</Link>
                  </p>
                  <p className="text-sm pt-1">
                    <Link href="/make-payment-prompt">Payment</Link>
                  </p>
                  <p className="text-sm pt-1">
                    <Link href="/remote-access">Remote Access</Link>
                  </p>
                </div>
              )}
            </span>
            <span className="cursor-pointer">Ayo234</span>
            <div
              className={`cursor-pointer ${
                currentPage == "contact" && "mt-3"
              }  relative flex justify-center flex-col items-center`}
              onClick={() => router.push("/contact")}
            >
              <p>Contact Us</p>
              {currentPage == "contact" && (
                <span className="flex justify-center">
                  <Image
                    src={underline}
                    style={{ width: "72px", paddingTop: "8px" }}
                    alt="underline"
                  />
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center">
          <div
            className={`relative border border-1 ${
              scrollPos > 10 ? "border-black" : "border-white"
            } px-2 py-2 cursor-pointer ${
              scrollPos <= 10 && isLoggedIn
                ? "bg-white"
                : scrollPos > 10 && isLoggedIn
                ? "bg-[#2E263D]"
                : scrollPos <= 10 && !isLoggedIn
                ? ""
                : ""
            }`}
            onClick={() => {
              setShowAuthDetails((prev) => {
                return !showAuthDetails;
              });
            }}
          >
            {showAuthDetails && (
              <div className="absolute top-14 right-0 text-[#1E1E1E] p-3 px-4 bg-[#fff]">
                <p
                  className={`${inter.variable} font-inter lg:text-base text-xs mb-2`}
                  onClick={() => router.push("/auth/sign-in")}
                >
                  Login
                </p>
                <p
                  className={`${inter.variable} font-inter lg:text-base text-xs`}
                  onClick={() => router.push("/auth/sign-up")}
                >
                  Register
                </p>
              </div>
            )}

            <Image
              src={
                scrollPos <= 10 && isLoggedIn
                  ? userDark
                  : scrollPos > 10 && isLoggedIn
                  ? user
                  : scrollPos <= 10 && !isLoggedIn
                  ? user
                  : userDark
              }
              alt="user_icon"
            />
          </div>
          {!authScreen && (
            <div className="hidden xl:block ml-4">
              <ButtonWithNoIcon
                dark={scrollPos > 10 ? true : false}
                text="Client Portal"
              />
            </div>
          )}

          <div
            className="ml-2 xl:hidden cursor-pointer"
            onClick={() => {
              dispatch(showMobileNav());
            }}
          >
            <Image
              src={scrollPos > 10 ? hamburgerBlack : hamburgerWhite}
              alt="hamburger"
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
