import React from "react";
import { Row, Col } from "antd";
import { ubuntu, inter } from "@/utils/fonts";
import { ButtonWithIcon, ButtonWithNoIcon } from "../Buttons/ActionButton";
import { useRouter } from "next/router";

interface IdentityOptionProps {
  blueBorderHead: string;
  blueBorderText: string;
  blueBorderButtonText: string;
  blueBorderButtonIcon?: boolean;
  blackBorderHead: string;
  blackBorderText: string;
  blackBorderButtonText: string;
  blackBorderButtonExtra?: boolean;
  blackBorderButtonExtraText?: string;
}

export const IdentityOption = ({
  blueBorderHead,
  blueBorderText,
  blueBorderButtonText,
  blackBorderHead,
  blackBorderText,
  blackBorderButtonText,
  blueBorderButtonIcon = false,
  blackBorderButtonExtra,
  blackBorderButtonExtraText = "",
}: IdentityOptionProps) => {
  const router = useRouter();
  return (
    <Row justify={"center"}>
      <Col xs={22} lg={16}>
        <Row gutter={{ xs: 0, lg: 80 }}>
          <Col xs={24} lg={12}>
            <div className="border-2 border-[#7FBAE6] px-6 py-8">
              <p
                className={`${ubuntu.variable} font-ubuntu text-[#1E1E1E] text-lg lg:text-2xl font-bold`}
              >
                {blueBorderHead}
              </p>
              <p
                className={`${inter.variable} font-inter text-sm lg:text-lg text-[#5A5A5A] my-4 lg:h-[100px]`}
              >
                {blueBorderText}
              </p>

              {blueBorderButtonIcon ? (
                <ButtonWithIcon
                  text={blueBorderButtonText}
                  dark={true}
                  alignCenter={false}
                />
              ) : (
                <ButtonWithNoIcon
                  text={blueBorderButtonText}
                  dark={true}
                  alignCenter={false}
                />
              )}
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className="border-2 border-[#464646] px-6 py-8 mt-16 lg:mt-0">
              <p
                className={`${ubuntu.variable} font-ubuntu text-[#1E1E1E] text-lg lg:text-2xl font-bold`}
              >
                {blackBorderHead}
              </p>
              <p
                className={`${inter.variable} font-inter text-sm lg:text-lg text-[#5A5A5A] my-4  lg:h-[100px]`}
              >
                {blackBorderText}
              </p>
              <div className="flex">
                <ButtonWithIcon
                  text={blackBorderButtonText}
                  dark={true}
                  alignCenter={false}
                  handleRoute={() => router.push("/make-payment-as-guest")}
                />

                {blackBorderButtonExtra && (
                  <div className="ml-4">
                    <ButtonWithNoIcon
                      text={blackBorderButtonExtraText}
                      dark={true}
                      alignCenter={false}
                      handleRoute={() => router.push("/")}
                    />
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
