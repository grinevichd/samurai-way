import React from "react";
import styles from "./UserMenu.module.scss"

type UserMenuPropsType = {
  logout: () => void
  visibilityCallBack: () => void
}

export const UserMenu = (props: UserMenuPropsType) => {

  const logoutHandler = async () => {
    await props.logout()
    props.visibilityCallBack()
  }

  return (
    <div className={styles.UserMenuBox}>
      <h3 className={styles.logoutButton}>
        <span onClick={logoutHandler}>Logout</span>
      </h3>
    </div>
  )
}