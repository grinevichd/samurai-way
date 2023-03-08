import styles from "./NavOpenMenu.module.scss";
import {NavLink} from "react-router-dom";

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

                <span>Profile</span>
            </NavLink>

            <NavLink
                to="/dialogs"
                className={styles.nav}
                activeClassName={styles.activeLink}
                onClick={props.visibilityCallBack}
            >

                <span>Messages</span>
            </NavLink>

            <NavLink
                to="/users"
                className={styles.nav}
                activeClassName={styles.activeLink}
                onClick={props.visibilityCallBack}
            >

                <span>Users</span>
            </NavLink>
        </div>
    )
}