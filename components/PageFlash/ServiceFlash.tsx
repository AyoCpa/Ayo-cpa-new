import { ButtonWithIcon } from "../Buttons/ActionButton";
import styles from "./Flash.module.css"
import { ubuntu } from "@/utils/fonts";

export const ServiceFlash = () => {
    return (
      <div className={styles.subBanner}>
        <div
          className={`lg:w-1/2 w-full leading-snug lg:leading-snug text-xl lg:text-5xl mx-auto text-center text-white  ${ubuntu.variable} font-ubuntu`}
        >
          We are always at your service, and we&apos;re part of your team.
        </div>
        <div className="mt-12">
          <ButtonWithIcon text="Book an appointment" />
        </div>
      </div>
    );
}