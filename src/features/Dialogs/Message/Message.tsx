import React from "react";
import imgAvatar from "../../../assets/user.png";
import {MessagesDataType} from "../dialogsReducer";
import s from './Message.module.scss'

export const Message = (props: MessagesDataType) => {
  return <div className={s.messageComponent}>
    <div className={s.messageBox}>
      <div className={s.messageUser}>{props.message}</div>
      <img
        className={s.imgAvatar}
        src={imgAvatar}
        alt={'imgAvatar'}
      />
    </div>
  </div>
}

