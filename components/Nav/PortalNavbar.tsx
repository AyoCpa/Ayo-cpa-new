import logo from "@/public/ASSETS/LOGOS/logo.svg";
import { inter } from "@/utils/fonts";
import Image from "next/image";
import textArrowDownFill from "../../public/ASSETS/ICONS/text-arrow-down-fill.svg";
import { useEffect, useState } from "react";
import logoColored from "@/public/ASSETS/LOGOS/logo-colored.svg";
import userDark from "@/public/ASSETS/ICONS/user-dark.svg";
import hamburgerBlack from "@/public/ASSETS/ICONS/hamburger-black.svg";
import notification_status from "@/public/ASSETS/ICONS/notification_status.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

// import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { RootState } from "@/redux/store";
import { showMobileNav } from "@/redux/reducers/mobileNavReducer";

type NavBarProps = {
  authScreen?: boolean;
  currentPage?: string;
};

const PortalNavbar = ({ authScreen = false }: NavBarProps) => {
  const [showAuthDetails, setShowAuthDetails] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;
  const [scrollPos, setScrollPos] = useState(0);
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
        } font-inter font-medium fixed top-0 w-full z-10 flex flex-row justify-between ${
            authScreen
            ? "bg-[#1a1229cc]"
            : "bg-white"
        } ${
          !authScreen ? "px-4 lg:px-12" : " px-4 lg:px-40"
        }  py-4 text-white items-center`}
      >

        {/* hamburger  */}
        <div
          className="ml-2 lg:hidden cursor-pointer"
          onClick={() => {
            dispatch(showMobileNav());
          }}
          >
            <Image
              src={hamburgerBlack}
              alt="hamburger"
              width={35}
              height={35}
            />
        </div>

        <div
          className=""
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={!authScreen? logoColored : logo}
            alt="ayocpa's logo"
            className="w-[200px] lg:w-full cursor-pointer hidden lg:block"
          />
        </div>

        {!authScreen && (
          <div
            className={`xl:flex flex-row justify-between w-1/2 items-center text-[#1A1229]`}
          >
            <span className="flex flex-row items-center cursor-pointer relative ">
              <span
                onClick={() => {
                  // 
                }}
                className="flex items-center"
              >
                <span className="pr-2 pl-3 lg:pl-0 ">
                  <Image src={notification_status} alt="text-arrow-down" />
                </span>
                <span className="text-[#6E6E6E] font-inter hidden lg:block">Notification</span>
              </span>
            </span>

          </div>
        )}

        <div className="flex items-center">
          {!authScreen && ( 
            <span className="flex flex-row items-center cursor-pointer relative ">
              <span className="pr-5">
                <span className="cursor-pointer text-[#1E1E1E]">Gregory Adams</span> <br />
                <span className="text-[#6E6E6E] font-inter">CL#1234</span>
              </span> 
              <span
                onClick={() => {
                  setShowAuthDetails((prev) => {
                    return !showAuthDetails;
                  });
                }}
                  className="flex items-center"
              >
                <div
                  className={`relative border border-1 ${"border-[#D2D2D2]"} px-2 py-2 cursor-pointer ${
                    scrollPos <= 10 && isLoggedIn
                      ? "bg-white"
                      : scrollPos > 10 && isLoggedIn
                      ? "bg-[#2E263D]"
                      : scrollPos <= 10 && !isLoggedIn
                      ? ""
                      : ""
                  }`}
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
                    src={userDark}
                    alt="user_icon"
                  />
                </div>
                <span className="pl-2">
                  <Image src={textArrowDownFill} alt="text-arrow-down" />
                </span>
              </span>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PortalNavbar;
