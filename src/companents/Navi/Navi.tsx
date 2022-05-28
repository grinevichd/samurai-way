import React from "react";
import style from "./Navi.module.css"

export const Navi = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a>Profile</a></div>
            <div className={`${style.item} ${style.action}`}><a>Messages</a></div>
            <div className={style.item}><a>News</a></div>
            <div className={style.item}><a>Music</a></div>
        </nav>
    );
}