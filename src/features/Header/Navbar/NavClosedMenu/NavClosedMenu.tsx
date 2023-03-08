import React from "react";
import styles from './NavClosedMenu.module.scss'
import {NavLink} from "react-router-dom";

type NavClosedMenuPropsType = {
    visibilityNavMenu: boolean
    navMenuHandler: () => void
    visibilityCallBack: () => void
}

export const NavClosedMenu = (props: NavClosedMenuPropsType) => {
    return (
        <div className={styles.navClosedMenuBox} onClick={props.navMenuHandler}>
            <div className={styles.menuItem}>

                <span>Menu</span>
            </div>
            {props.visibilityNavMenu &&
            <div className={styles.navMenu}>
                <div className={styles.navItem}>
                    <NavLink
                        to="/profile"
                        className={styles.nav}
                        activeClassName={styles.activeLink}
                        onClick={props.visibilityCallBack}
                    >
                        <span>Profile</span>
                    </NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink
                        to="/dialogs"
                        className={styles.nav}
                        activeClassName={styles.activeLink}
                        onClick={props.visibilityCallBack}
                    >
                        <span>Messages</span>
                    </NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink
                        to="/users"
                        className={styles.nav}
                        activeClassName={styles.activeLink}
                        onClick={props.visibilityCallBack}
                    >
                        <span>Users</span>
                    </NavLink>
                </div>
            </div>
            }
        </div>
    )
}