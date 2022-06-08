import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navi.module.css"

export const Navi = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><NavLink to={"/profile"} activeClassName={style.action}>Profile</NavLink></div>
            <div className={`${style.item} ${style.action}`} ><NavLink to={"/dialogs"} activeClassName={style.action}>Messages</NavLink></div>
            <div className={style.item}><NavLink to={"/news"} activeClassName={style.action} >News</NavLink></div>
            <div className={style.item}><NavLink to={"/music"} activeClassName={style.action}>Music</NavLink></div>
            <div className={style.item}><NavLink to={"/settings"} activeClassName={style.action}>Settings</NavLink></div>
        </nav>
    );
}