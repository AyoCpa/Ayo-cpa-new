import React from 'react'
import {Row , Col} from "antd"
import {inter , ubuntu} from "@/utils/fonts"

export const PageSideSubHeader = ({mainText , subText}:{mainText:string , subText:string}) => {
  return (
    <Row justify={"center"}>
      <Col xs={22} lg={16}>
        <div className='mt-16'>
          <p
            className={`${ubuntu.variable} font-ubuntu text-lg lg:text-2xl font-semibold tracking-wide`}
          >
            {mainText}
          </p>

          <p
            className={`${inter.variable} font-inter text-[#6E6E6E] text-xs lg:text-lg mt-3`}
          >
            {subText}
          </p>
        </div>
      </Col>
    </Row>
  );
}
