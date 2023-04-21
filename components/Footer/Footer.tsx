import logoWhite from "@/public/ASSETS/LOGOS/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd";
import { inter, ubuntu } from "@/utils/fonts";
import facebook from "@/public/ASSETS/ICONS/facebook.svg";
import twitter from "@/public/ASSETS/ICONS/twitter.svg";
import linkedIn from "@/public/ASSETS/ICONS/linkedIn.svg";
import footerSticker from "@/public/ASSETS/ICONS/footer_sticker.svg";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="relative">
      <Row justify={"center"} className="bg-[#1A1229] py-12">
        <Col xs={20}>
          <div className="mb-12">
            <Image src={logoWhite} alt="logo-white" />
          </div>

          <Row className={`text-white ${inter.variable} font-inter`}>
            <Col xs={12} lg={6}>
              <div className={`${inter.variable} font-inter font-lg mb-10`}>
                Get in touch
              </div>
              <div className="text-xs mb-4">Tel: 780.594.4441</div>
              <div className="text-xs mb-4">Fax: 780.594.6608</div>
              <div className="text-xs mb-4">Email us</div>
              <div className="flex">
                <div className="mr-4 cursor-pointer">
                  <Image src={facebook} alt="facebook" />
                </div>

                <div className="mr-4 cursor-pointer">
                  <Image src={twitter} alt="twitter" />
                </div>

                <div className="mr-4 cursor-pointer">
                  <Image src={linkedIn} alt="linkedIn" />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className={`${inter.variable} font-inter font-lg mb-10`}>
                Our Offices
              </div>

              <div className="text-xs mb-4  leading-relaxed">
                Saskatchewan <br /> PO Box 1047 Stn. Main <br /> Meadow Lake, SK
                S9X 1Y7
              </div>
              <div className="text-xs mt-4 mb-4  leading-relaxed">
                Alberta <br /> #201, 4807 - 51 Street <br /> PO Box 540, Stn.
                Main <br /> Cold Lake, AB T9M 1P2
              </div>
            </Col>
            <Col xs={12} lg={6} className="mt-16 lg:mt-0">
              <div className={`${inter.variable} font-inter font-lg mb-10`}>
                Company
              </div>

              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/about">About</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/contact">Contact us</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/accessibility">Accessibility</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/terms-of-use">Terms of Use</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/privacy">Privacy Statement</Link>
              </div>
            </Col>
            <Col xs={12} lg={6} className="mt-16 lg:mt-0">
              <div className={`${inter.variable} font-inter font-lg mb-10`}>
                Quick Links
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/">Client Portal</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/resource">Resources</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/">File My Taxes</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/submit-file-as-new-client">Submit Documents</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/book-an-appointment">Book an appointment</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/make-payment-as-guest">Payments</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/">Ayo 234</Link>
              </div>
              <div className="text-xs mb-4 cursor-pointer">
                <Link href="/remote-access">Remote Access</Link>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={24} className="mb-28 lg:mb-0">
          <div
            className={` ${inter.variable} mt-10 font-inter text-[#E6E6E6] text-xs text-center text-white`}
          >
            © {date} Ayo & Company Chartered Professional Accountant
          </div>
        </Col>
      </Row>

      <div className="absolute bottom-0 right-0 -z-2">
        <Image src={footerSticker} alt="footer sticker" />
      </div>
    </div>
  );
};
