import {Row , Col} from "antd"
import { ubuntu , inter } from "@/utils/fonts";
import { ButtonWithIcon } from "../Buttons/ActionButton";

export const HireFlash = () => {
    return (
      <Row justify={"center"}  className="bg-[#6FB1E3] py-16">
        <Col xs={20}>
          <Row gutter={50} >
            <Col xs={8}>
              <div className={`${ubuntu.variable} font-ubuntu text-white text-4xl`}>
                Hire an Accountant / <br/> File your tax
              </div>
            </Col>
            <Col xs={16} className="text-white "  >
              <div className={`${inter.variable} font-inter  text-lg`} >
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