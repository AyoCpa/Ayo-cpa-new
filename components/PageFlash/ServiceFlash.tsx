import { ButtonWithIcon } from "../Buttons/ActionButton";
import styles from "./Flash.module.css"
import { ubuntu } from "@/utils/fonts";

export const ServiceFlash = () => {
    return (
      <div className={styles.subBanner}>
        <div
          className={`w-1/2 leading-snug text-5xl mx-auto text-center text-white  ${ubuntu.variable} font-ubuntu`}
        >
          We are always at your service, and we’re part of your team.
        </div>
        <div className="mt-12">
          <ButtonWithIcon text="Book an appointment" />
        </div>
      </div>
    );
}