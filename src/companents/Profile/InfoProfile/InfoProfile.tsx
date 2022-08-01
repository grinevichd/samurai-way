import React from "react";
import style from "./InfoProfile.module.css"
import {UserProfile} from "../../../redux/profile-reducer";
import {Preloader} from "../../Preloader/Preloader";
import image from "../../../assets/images/avatar.png"

type InfoProfileType = {
    profileUser : UserProfile | null
}

export const InfoProfile = (props:InfoProfileType) => {
    console.log(props)
   if(!props.profileUser){
       return <Preloader/>
   }
    return (
        <>
            <img
                src="https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/05/1-Grand_Canal-e1527214553775.jpg"
                alt=""/>
            <div className={style.disriptionBlock}>{<img style={{width:"200px"}} src={props.profileUser.photos.large ? props.profileUser.photos.large : image} alt="empty"/>}</div>
            <div>{props.profileUser.aboutMe}</div>
            <div>Контакты:
                <div>{props.profileUser.contacts.vk}</div>
                <div>{props.profileUser.contacts.github}</div>
                <div>{props.profileUser.contacts.facebook}</div>
                <div>{props.profileUser.contacts.twitter}</div>
                <div>{props.profileUser.contacts.instagram}</div>
                <div>{props.profileUser.contacts.mainLink}</div>
                <div>{props.profileUser.contacts.website}</div>
                <div>{props.profileUser.contacts.youtube}</div>
            </div>
            {props.profileUser.lookingForAJob && <div>Я очень ОЧЕНЬ СИЛЬНО ИЩУ РАБОТУ заберите меня</div>}
            <div>{props.profileUser.lookingForAJobDescription}</div>
            <div>Мое полное имя : {props.profileUser.fullName}</div>


        </>
    );
}