import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navi.module.css"
import {FriendsType} from "./NaviContainer";


export const Navi = (props:FriendsType) => {

    let elementRef = React.createRef<HTMLTextAreaElement>()

    const addFriend = () => {
        props.addFriend()
    }
    const addFriendOnArea = () => {
        const text = elementRef.current
        if(text){
            props.changeFriend(text.value)
        }
    }

    const friends = props.myFriends.friends.map((friend,i) => <span key={i}>{friend.name} </span>)
    return (

        <nav className={style.nav}>
            <div className={style.item}><NavLink to={"/profile"} activeClassName={style.action}>Profile</NavLink></div>
            <div className={`${style.item} ${style.action}`} ><NavLink to={"/dialogs"} activeClassName={style.action}>Messages</NavLink></div>
            <div className={style.item}><NavLink to={"/news"} activeClassName={style.action} >News</NavLink></div>
            <div className={style.item}><NavLink to={"/music"} activeClassName={style.action}>Music</NavLink></div>
            <div className={style.item}><NavLink to={"/settings"} activeClassName={style.action}>Settings</NavLink></div>
            <div className={style.item}><NavLink to={"/users"}activeClassName={style.action}>Users</NavLink></div>
            <div className={style.friends}>
                <span>Friends</span>
                <div>
                    {friends}
                </div>
                <textarea ref={elementRef} value={props.myFriends.newFriend} onChange={addFriendOnArea}/>
                <button onClick={addFriend}>add friend</button>

            </div>
        </nav>

    );
}