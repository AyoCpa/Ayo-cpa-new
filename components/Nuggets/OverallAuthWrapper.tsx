import React from 'react'
import styles from "@/styles/Home.module.css"

function OverallAuthWrapper({children}:{children:JSX.Element}) {
  return (
    <div className={styles.signUpBanner}>{children}</div>
  )
}

export default OverallAuthWrapper