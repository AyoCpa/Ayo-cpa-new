import logoWhite from "@/public/ASSETS/LOGOS/logo-white.svg";
import Image from "next/image";
import { Row, Col } from "antd";
import { inter, ubuntu } from "@/utils/fonts";
import facebook from "@/public/ASSETS/ICONS/facebook.svg";
import twitter from "@/public/ASSETS/ICONS/twitter.svg";
import linkedIn from "@/public/ASSETS/ICONS/linkedIn.svg";

export const Footer = () => {
  return (
    <Row justify={"center"} className="bg-[#1A1229] py-12">
      <Col xs={20}>
        <div className="mb-12">
          <Image src={logoWhite} alt="logo-white" />
        </div>

        <Row className={`text-white ${inter.variable} font-inter`}>
          <Col xs={6}>
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
          <Col xs={6}>
            <div className={`${inter.variable} font-inter font-lg mb-10`}>
              Our Offices
            </div>

            <div className="text-xs mb-4  leading-relaxed">
              Saskatchewan <br /> PO Box 1047 Stn. Main <br /> Meadow Lake, SK
              S9X 1Y7
            </div>
            <div className="text-xs mt-4 mb-4  leading-relaxed">
              Alberta <br /> #201, 4807 - 51 Street <br /> PO Box 540, Stn. Main <br /> Cold Lake, AB
              T9M 1P2
            </div>
          </Col>
          <Col xs={6}>
            <div className={`${inter.variable} font-inter font-lg mb-10`}>
              Company
            </div>

            <div className="text-xs mb-4 cursor-pointer">About</div>
            <div className="text-xs mb-4 cursor-pointer">Contact us</div>
            <div className="text-xs mb-4 cursor-pointer">Accessibility</div>
            <div className="text-xs mb-4 cursor-pointer">Terms of Use</div>
            <div className="text-xs mb-4 cursor-pointer">Privacy Statement</div>
          </Col>
          <Col xs={6}>
            <div className={`${inter.variable} font-inter font-lg mb-10`}>
              Quick Links
            </div>
            <div className="text-xs mb-4 cursor-pointer">Client Portal</div>
            <div className="text-xs mb-4 cursor-pointer">Resources</div>
            <div className="text-xs mb-4 cursor-pointer">File My Taxes</div>
            <div className="text-xs mb-4 cursor-pointer">Submit Documents</div>
            <div className="text-xs mb-4 cursor-pointer">Book an appointment</div>
            <div className="text-xs mb-4 cursor-pointer">Payments</div>
            <div className="text-xs mb-4 cursor-pointer">Ayo 234</div>
            <div className="text-xs mb-4 cursor-pointer">Remote Access</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
