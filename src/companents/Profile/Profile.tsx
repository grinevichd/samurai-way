import React from "react";

import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () =>{
    return(
        <div className={style.content}>
            <img
                src="https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/05/1-Grand_Canal-e1527214553775.jpg"
                alt=""/>
            <div>avat + disription</div>
            <MyPosts />
        </div>
    );
}