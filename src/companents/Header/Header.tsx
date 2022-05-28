import React from "react";

import style from "./Header.module.css"

export const Header = () =>{
    return(
        <header className={style.header}>
            <img
                src="https://thumbs.dreamstime.com/b/vector-graphic-initials-letter-js-logo-design-template-emblem-hexagon-204622912.jpg"
                alt=""/>
        </header>
    );
}