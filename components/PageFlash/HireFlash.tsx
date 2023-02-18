import {Row , Col} from "antd"
import { ubuntu , inter } from "@/utils/fonts";
import { ButtonWithIcon } from "../Buttons/ActionButton";

export const HireFlash = () => {
    return (
      <Row justify={"center"}  className="bg-[#6FB1E3] py-16">
        <Col xs={22} lg={20}>
          <Row gutter={50} >
            <Col xs={24} lg={8}>
              <div className={`${ubuntu.variable} font-bold font-ubuntu text-white text-xl lg:text-4xl`}>
                Hire an Accountant / <br/> File your tax
              </div>
            </Col>
            <Col xs={16} className="text-white "  >
              <div className={`${inter.variable} mt-3 lg:mt-0 text-sm font-inter font-medium  lg:text-lg`} >
                Let us help you out with the receipts, the statements, the
                forms, the loads of possible deductions and credits
              </div>

              <div className="pt-8">
                <ButtonWithIcon text="Get started now" alignCenter={false} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
}