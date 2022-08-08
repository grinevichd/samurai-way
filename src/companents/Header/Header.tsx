import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Header.module.css"
import {HeaderPropsType} from "./HeaderContainer";


export const Header: React.FC<HeaderPropsType> = ({login,isAuth}) =>{

    return(
        <header className={style.header}>
            <img
                src="https://thumbs.dreamstime.com/b/vector-graphic-initials-letter-js-logo-design-template-emblem-hexagon-204622912.jpg"
                alt=""/>
            <div className={style.loginBlock}>
                {isAuth?login:<NavLink to={"/login"}>Login</NavLink>}
                </div>
        </header>
    );
}