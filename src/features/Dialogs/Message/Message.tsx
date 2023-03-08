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

// import React from 'react';
// import s from './Message.module.scss'
//
// export const Message: React.FC<MessagePropsType> = (props) => {
//   return (
//     <div className={s.message}>
//       <img src={props.photo} alt={'avatar'} className={s.avatar}/>
//       <div className={s.angel}/>
//       <div className={s.content}>
//         <div className={s.name}>{props.name}</div>
//         <div className={s.title}>{props.message}</div>
//       </div>
//     </div>
//   )
// }
//
// type MessagePropsType = {
//   message: string
//   photo: string
//   name: string
// }
