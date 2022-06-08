import React from "react";

import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {InfoProfile} from "./InfoProfile/InfoProfile";

export const Profile = () =>{
    return(
        <>
            <InfoProfile/>
            <MyPosts />
        </>
    );
}