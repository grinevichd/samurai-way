import styles from "./NavOpenMenu.module.scss";
import {NavLink} from "react-router-dom";
// import {SvgSelector} from "../../../../common/components/svgSelector/SvgSelector";
import React from "react";

type NavOpenMenuPropsType = {
  visibilityCallBack: () => void
}

export const NavOpenMenu = (props: NavOpenMenuPropsType) => {
  return (
    <div className={styles.navOpenMenuBox}>
      <NavLink
        to="/profile"
        className={styles.nav}
        activeClassName={styles.activeLink}
        onClick={props.visibilityCallBack}
      >
        {/*<SvgSelector svgName={"Home"}/>*/}
        <span>Profile</span>
      </NavLink>

      <NavLink
        to="/dialogs"
        className={styles.nav}
        activeClassName={styles.activeLink}
        onClick={props.visibilityCallBack}
      >
        {/*<SvgSelector svgName={"Messages"}/>*/}
        <span>Messages</span>
      </NavLink>

      <NavLink
        to="/users"
        className={styles.nav}
        activeClassName={styles.activeLink}
        onClick={props.visibilityCallBack}
      >
        {/*<SvgSelector svgName={"Users"}/>*/}
        <span>Users</span>
      </NavLink>
    </div>
  )
}