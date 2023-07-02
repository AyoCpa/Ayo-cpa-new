import React from 'react'
import styles from "@/styles/Home.module.css"


type WrapperProps = {
  children:JSX.Element
  portalWrapper?: boolean;
  
};

function OverallAuthWrapper({ portalWrapper = false, children }: WrapperProps ) {
  return (
    portalWrapper 
      ? <div className={styles.portalSignUpBanner}>{children}</div>
      : <div className={styles.signUpBanner}>{children}</div>
  )
}

export default OverallAuthWrapper