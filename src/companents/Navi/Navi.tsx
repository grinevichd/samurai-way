import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navi.module.css"
import {SidebarType} from "../../redux/store";



type FriendsType={
    myFriends : SidebarType
}

export const Navi = (props:FriendsType) => {
    debugger
    const friends = props.myFriends.friends.map(friend => <span>{friend.name}</span>)
    return (

        <nav className={style.nav}>
            <div className={style.item}><NavLink to={"/profile"} activeClassName={style.action}>Profile</NavLink></div>
            <div className={`${style.item} ${style.action}`} ><NavLink to={"/dialogs"} activeClassName={style.action}>Messages</NavLink></div>
            <div className={style.item}><NavLink to={"/news"} activeClassName={style.action} >News</NavLink></div>
            <div className={style.item}><NavLink to={"/music"} activeClassName={style.action}>Music</NavLink></div>
            <div className={style.item}><NavLink to={"/settings"} activeClassName={style.action}>Settings</NavLink></div>
            <div className={style.friends}>
                <span>Friends</span>
                <div>
                    {friends}
                </div>

            </div>
        </nav>

    );
}